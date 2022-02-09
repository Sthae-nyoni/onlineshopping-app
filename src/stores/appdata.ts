import { writable } from "svelte/store";
import type { ProductCardProps, ShopCardProps } from "../models/component_props";

const test_shops: ShopCardProps[] = [
    {
        name: 'Ok Mart',
        alt_tag: 'Ok supermarket',
        img_url: '/ok logo.png',
        location: '2 Josiah Chinamano Rd, Bulawayo'    
    },
    {
        name: 'Green Super Market',
        alt_tag: 'greens supermarket',
        img_url: '/green logo.jpg',
        location: 'No.50A,Jason Moyo St,Byo'    
    },
    {
        name: 'Choppies',
        alt_tag: 'choppies supermarket',
        img_url: '/choppies logo.jpg',
        location: 'Jason Moyo St, Bulawayo'    
    },
    {
        name: 'TM Hyper',
        alt_tag: 'tm hyper',
        img_url: '/hperlogo.jpg',
        location: 'Herbert Chitepo St, Bulawayo'    
    },
    {
        name: 'Spar Supermarket',
        alt_tag: 'spar supermarket',
        img_url: '/spar logo.jpg',
        location: '65 Joshua Nkomo St, Bulawayo'    
    },
    {
        name: 'Food For Less',
        alt_tag: 'Food For Less supermarket',
        img_url: '/Food 4 less.jpg',
        location: 'Herbert Chitepo St, Bulawayo'    
    },
     {
        name: 'Pick and Pay',
        alt_tag: 'Pick and Pay supermarket',
        img_url: '/Pick-n-Pay.jpg',
        location: 'Jason Moyo St, Bulawayo'    
    },
    {
        name: 'Tilus Supermarket',
        alt_tag: 'Tilus supermarket',
        img_url: '/Tilus logo.png',
        location: '32, Sixth Ave, Bulawayo'    
    },
    {
        name: 'Powersales',
        alt_tag: 'Powersales',
        img_url: '/Power-Sales-Brands-Africa (1).jpg',
        location: 'RHWP+9Q2, Bulawayo'    
    },
    {
        name: 'Meikles',
        alt_tag: 'Meikles',
        img_url: '/logo-meikles-1.jpg',
        location: 'RHXM+68F, Bulawayo'    
    },
    {
        name: 'Edgars',
        alt_tag: 'Edgars',
        img_url: '/Edgars.jpg',
        location: 'Cnr.9th Jason Moyo St,Byo'    
    },
    {
        name: 'Topics',
        alt_tag: 'Topics',
        img_url: '/Topics logo.png',
        location: 'Byo Centre Shop No3 Fort St Byo'    
    },
    {
        name: 'Bata Store',
        alt_tag: 'Bata Store',
        img_url: '/Bata logo.png',
        location: '88 Jason Moyo St, Bulawayo'    
    },

]

export const dark_theme = writable(true);

export const shops = writable<ShopCardProps[]>(test_shops);
export const categories = writable<{key: string, name: string}[]>([])
export const product_data = writable<{ [category: string]: ProductCardProps[] }>(null);
