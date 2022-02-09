import { writable } from "svelte/store";
import type { ProductCardProps, ShopCardProps } from "../models/component_props";

const test_shops: ShopCardProps[] = [
    {
        name: 'Ok Mart',
        alt_tag: 'Ok supermarket',
        img_url: '/ok logo.png',
        location: 'Bulawayo'
    },
    {
        name: 'Green Super Market',
        alt_tag: 'greens supermarket',
        img_url: '/green logo.jpg',
        location: 'Bulawayo'
    },
    {
        name: 'Choppies',
        alt_tag: 'choppies supermarket',
        img_url: '/choppies logo.jpg',
        location: 'Bulawayo'
    },
    {
        name: 'TM Hyper',
        alt_tag: 'tm hyper',
        img_url: '/hperlogo.jpg',
        location: 'Bulawayo'
    },
    {
        name: 'Spar Supermarket',
        alt_tag: 'spar supermarket',
        img_url: '/spar logo.jpg',
        location: 'Bulawayo'
    },
    {
        name: 'Choppies',
        alt_tag: 'choppies store',
        img_url: '/choppies logo.jpg',
        location: 'Bulawayo'
    },
]

export const dark_theme = writable(true);

export const shops = writable<ShopCardProps[]>(test_shops);
export const categories = writable<{key: string, name: string}[]>([])
export const product_data = writable<{ [category: string]: ProductCardProps[] }>(null);
