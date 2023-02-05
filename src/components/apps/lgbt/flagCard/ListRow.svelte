<script>
    import List, { Item, Graphic, Text } from '@smui/list';
    import { fly } from 'svelte/transition';
    import Button, { Label } from '@smui/button';


    export let flagBrandColor, showData, text;
</script>


<Item style="height: 45px; color: {flagBrandColor};" on:SMUI:action={() => (showData = !showData)}>
    <Graphic class="material-icons" style="color: {flagBrandColor};">{showData ? 'expand_less': 'expand_more'}</Graphic>
    <Text style="display: flex; align-items: center; ">
        {text}           
    </Text>
</Item>
{#if showData}
    <div transition:fly="{{ y: -20, duration: 400 }}">
        <slot/>
        <Button style="background-color: {flagBrandColor}; margin: 5px 0 25px 0; width: 100%;" on:click={() => showData = !showData} variant="raised">
            <Label>Hide {text} info</Label>
        </Button>
    </div>
{/if}