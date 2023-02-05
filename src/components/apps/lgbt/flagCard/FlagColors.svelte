<script>
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

    export let flag;
</script>

{#each flag.description as text}
    <p class="mdc-typography--body2" style="color: #fff;">{text}</p>
{/each}

<DataTable table$aria-label="Flag colors" style="width: 310px; margin: 10px 0; ">
    <Head>
        <Row>
        <Cell>Color</Cell>
        <Cell>Description</Cell>
        </Row>
    </Head>
    <Body>
        {#each flag.colors as colorInfo}
            <Row>
                <Cell>{colorInfo.color}</Cell>
                <Cell>{colorInfo.description}</Cell>
            </Row>
        {/each}
    </Body>
</DataTable>