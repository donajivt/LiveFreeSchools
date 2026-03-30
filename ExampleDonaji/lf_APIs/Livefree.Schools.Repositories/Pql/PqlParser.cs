using System.Linq.Expressions;
using System.Reflection;
using System.Text.RegularExpressions;

namespace Livefree.Schools.Repositories.Pql
{
    public static class PqlParser
    {
        public static Expression<Func<T, bool>> Parse<T>(string filter)
        {
            var parameter = Expression.Parameter(typeof(T), "x");
            // Remove brackets and tokenize
            var cleanFilter = filter.Trim('[', ']');

            // Split by spaces but keep the delimiters & and |
            var tokens = Regex.Split(cleanFilter, @"(?<=[&|])|(?=[&|])")
                              .Select(t => t.Trim())
                              .Where(t => !string.IsNullOrEmpty(t))
                              .ToList();

            var expression = ParseExpression<T>(tokens, parameter);
            return Expression.Lambda<Func<T, bool>>(expression, parameter);
        }

        private static Expression ParseExpression<T>(List<string> tokens, ParameterExpression param)
        {
            // 1. Parse the first "unit" (prop:op:val)
            var left = ParseUnit<T>(tokens[0], param);
            tokens.RemoveAt(0);

            while (tokens.Count > 0)
            {
                var op = tokens[0]; // & or |
                tokens.RemoveAt(0);

                var right = ParseUnit<T>(tokens[0], param);
                tokens.RemoveAt(0);

                // 2. Combine based on operator
                left = op switch
                {
                    "&" => Expression.AndAlso(left, right),
                    "|" => Expression.OrElse(left, right),
                    _ => throw new Exception($"Invalid operator: {op}")
                };
            }

            return left;
        }

        private static Expression ParseUnit<T>(string unit, ParameterExpression param)
        {
            var parts = unit.Split(':');
            if (parts.Length != 3) throw new Exception($"Malformed segment: {unit}");

            // Requirement: Always upper the first letter of the property
            string rawProp = parts[0];
            string propertyName = char.ToUpper(rawProp[0]) + rawProp.Substring(1);
            string operation = parts[1].ToLower();
            string value = parts[2];

            PropertyInfo prop = typeof(T).GetProperty(propertyName)
                ?? throw new Exception($"Property {propertyName} not found on {typeof(T).Name}");

            var left = Expression.Property(param, prop);

            // Handle type conversion (e.g., "true" string to bool)
            var convertedValue = Convert.ChangeType(value, prop.PropertyType);
            var right = Expression.Constant(convertedValue);

            return operation switch
            {
                "equals" => Expression.Equal(left, right),
                "contains" => Expression.Call(left,
                    typeof(string).GetMethod("Contains", new[] { typeof(string) })!,
                    right),
                _ => throw new NotSupportedException($"Op {operation} is trash.")
            };
        }
    }
}
