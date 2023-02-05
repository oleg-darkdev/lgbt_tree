<script>
	import Card, {
		Content,
		PrimaryAction,
		Media,
		MediaContent,
		Actions,
		ActionButtons,
		ActionIcons
	} from '@smui/card';
	import Button, { Label } from '@smui/button';

  export let msgText = '', 
            showMsgMenu;
</script>

  <!-- <Card style=" width: 300px;  margin: 0  0 25px 0;"> -->
   <Card style=" width: 300px;  margin: 0  0 25px 0;">
      <Content>{msgText}</Content>
      <Actions>
        <Button on:click={() => showMsgMenu = !showMsgMenu}>
          <Label>Ok</Label>
        </Button>
        <Button on:click={() => clicked++}>
          <Label>Another</Label>
        </Button>
      </Actions>
    </Card>
<style>

</style>
