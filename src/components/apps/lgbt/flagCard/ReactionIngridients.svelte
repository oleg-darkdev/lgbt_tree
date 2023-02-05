<script>
 import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
    import Button, { Label } from '@smui/button';

  let showResult = false;


    export let ingridients;
    export let questionContinueReaction;
    export let showReaactions;
</script>

{#if !showResult}
<div style="display: flex; flex-direction: row; margin: 0 0 25px 0;">
    <Card style=" width: 140px; height: 70px; margin: 0 25px 0 0;">
        <Media class="card-media-16x9" style="background-image: url({ingridients[0].img});" aspectRatio="16x9" />
    </Card>
    <Card style=" width: 140px; height: 70px;">
        <Media class="card-media-16x9" style="background-image: url({ingridients[1].img});" aspectRatio="16x9" />
    </Card>
 </div>

<div style="display: flex; flex-direction: column;" class="mdc-typography--body2">Do you want to use two tokens to produce an alchemical reaction?
    <div style="display: flex; flex-direction: row;">
        <Button on:click={() => questionContinueReaction = !questionContinueReaction} 
            style="margin: 0 15px 0 0;" variant="outlined">
        <Label>No</Label>
        </Button>
        <Button color="secondary" on:click={() => showResult = !showResult} variant="unelevated">
        <Label>Yes</Label>
        </Button>
    </div>
</div>
{:else}
    <Card style=" width: 300px;  margin: 0  0 25px 0;">
        <Media class="card-media-16x9" style="background-image: url({ingridients[2].img});" aspectRatio="16x9" />
        <Actions fullBleed>
            <Button on:click={() => {
                showResult = !showResult;
                questionContinueReaction = !questionContinueReaction;
                showReaactions = !showReaactions;
            }}>
            <Label>Сontinued</Label>
            <i class="material-icons" aria-hidden="true">arrow_forward</i>
            </Button>
        </Actions>
    </Card>
{/if}



<style>

</style>