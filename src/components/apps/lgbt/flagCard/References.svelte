<script>
import List, {
    Item,
    Graphic,
    Meta,
    Text,
    PrimaryText,
    SecondaryText,
  } from '@smui/list';


export let flag, flagBrandColor;
</script>


<!-- : [
			{
				name: '"What is LGBTQ?". The Center - The Lesbian, Gay, Bisexual & Transgender Community Center.',
				link: 'https://gaycenter.org/about/lgbtq/#gay'
                source
			}, -->


<List
    class="demo-list"
    twoLine
    avatarList
    singleSelection
  >
    {#each flag as reference}
      <Item
        on:SMUI:action={() => window.open(reference.link, "_blank")}>
        <Text>
          <PrimaryText style="color: #fff;">{reference.name}</PrimaryText>
          <SecondaryText style="color: {flagBrandColor};">{reference.source}</SecondaryText>
        </Text>
      </Item>
    {/each}
  </List>