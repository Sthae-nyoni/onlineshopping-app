import { get } from "../util/util";
import type { ApiProduct } from "../models/models";
import { categories, product_data } from "../stores/appdata";
import type { ProductCardProps } from "../models/component_props";


const categories_path = 'https://fakestoreapi.com/products/categories';
const category_products_path = 'https://fakestoreapi.com/products/category';

export async function fetchProducts()
{
    const api_categories = await get<string[]>(categories_path);

    const category_details: { key: string, name: string }[] = []
    const product_details: { [id: string]: ProductCardProps[] } = {};

    for (let category of api_categories)
    {
        const key = category.replace(' ', '').trim().toLocaleLowerCase();
        const category_api_products = await get<ApiProduct[]>(`${category_products_path}/${category}?limit=3`);
        const category_products = convertApiProducts(category_api_products);
        
        product_details[key] = category_products;
        category_details.push({ key, name: category });

        categories.set(category_details);
        product_data.set(product_details);
    }

}


function convertApiProducts(data: ApiProduct[])
{
    return data.map(product => convert(product))
}

function convert(product: ApiProduct)
{
    return { ...product, rating: product.rating.rate };
}