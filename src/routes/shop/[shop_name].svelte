

<div>
    <h4>Shop Name: {name}</h4>
</div>

<script context="module" lang="ts">
    export async function load({ params })
    {
        const name = params.shop_name;

        return { props: { name } }
    }
</script>

<script lang="ts">
    export let name: string;
</script>