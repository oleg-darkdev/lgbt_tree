<script>
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
    
    export let flag;
</script>


<DataTable table$aria-label="Specifics" style="width: 310px; margin: 10px 0; ">
    <Head>
        <Row>
        <Cell>Specifics</Cell>
        <Cell>Description</Cell>
        </Row>
    </Head>
    <Body>
        
            <Row>
                <Cell>Genders</Cell>
                <Cell>
                    {#if flag.specifics.genders.length > 2}
                        {#each flag.specifics.genders as gender}
                            <span>{gender}</span> <br/>
                        {/each}
                    {:else}
                        <span>------------------</span>
                    {/if}
                </Cell>
            </Row>
        
            <Row>
                <Cell>Attracted to</Cell>
                <Cell>
                    {#if flag.specifics.attractedTo.length > 2}
                        {#each flag.specifics.attractedTo as attracted}
                            <span>{attracted}</span> <br/>
                        {/each}
                    {:else}
                        <span>------------------</span>
                    {/if}
                </Cell>
            </Row>
            <Row>
                <Cell>Attraction type</Cell>
                <Cell>
                    {#if flag.specifics.attractionType.length > 2}
                        {#each flag.specifics.attractionType as type}
                                <span>{type}</span> <br/>
                        {/each}
                    {:else}
                        <span>------------------</span>
                    {/if}
                </Cell>
            </Row>
            <Row>
                <Cell>Spectrum</Cell>
                <Cell>
                    {#if flag.specifics.spectrumOrUmbrella.length > 2}
                        {#each flag.specifics.spectrumOrUmbrella as spectrum}
                            <span>{spectrum}</span> <br/>
                        {/each}
                    {:else}
                        <span>------------------</span>
                    {/if}
                </Cell>
            </Row>
    </Body>
    </DataTable>