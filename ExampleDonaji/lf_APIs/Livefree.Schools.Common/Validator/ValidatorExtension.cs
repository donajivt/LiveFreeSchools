namespace Livefree.Schools.Common.Validator
{
    public static class ValidatorExtension
    {
        public static ValidatorContainer Val(this object? element)
        {
            return new ValidatorContainer(element);
        }

        public static ValidatorContainer IsNotNull(this ValidatorContainer container)
        {
            return container.Value is null
                ? throw new NullReferenceException()
                : container;
        }

        public static ValidatorContainer IsNotEmptyString(this ValidatorContainer container)
        {
            return string.IsNullOrEmpty((string)container.Value)
                ? throw new Exception("The value must be not empty string")
                : container;
        }
    }
}
