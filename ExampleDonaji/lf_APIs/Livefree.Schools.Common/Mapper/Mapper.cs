namespace Livefree.Schools.Common.Mapper
{
    public interface IMapper<TSource, TDestination>
    {
        TDestination Map(TSource source);
        TSource Map(TDestination destination);
    }
}
