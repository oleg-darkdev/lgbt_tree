<script>
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    
    export let flag;
</script>


<DataTable table$aria-label="Related terms" style="width: 310px; margin: 10px 0; ">
    <Body>
            <Row>
                <Cell>Associated romanticism</Cell>
                <Cell>
                    {#if flag.associatedRomanticism.length > 2}
                        {flag.associatedRomanticism}
                    {:else}
                        <span>------------------</span>
                    {/if}
                </Cell>
            </Row>
            <Row>
                <Cell>Different from</Cell>
                <Cell>
                    {#if flag.differentFrom.length > 2}
                        {#each flag.differentFrom as differentFrom}
                            <span>{differentFrom}</span> <br/>
                        {/each}
                    {:else}
                        <span>------------------</span>
                    {/if}
                </Cell>
            </Row>
    </Body>
</DataTable>