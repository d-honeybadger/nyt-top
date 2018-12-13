<!-- Displays either a list of available sections -->
<!-- or menu button with that list (in xs) -->
<template>
  <div>
    <TheSidebarMenu class="hidden-xs-only" />
    <VMenu
      class="hidden-sm-and-up"
      transition="scale-transition"
    >
      <VBtn
        slot="activator"
        flat
        icon
      >
        <VIcon>
          menu
        </VIcon>
      </VBtn>
      <TheSidebarMenu />
    </VMenu>
  </div>
</template>

<script>
  import TheSidebarMenu from './TheSidebarMenu';

  export default {
    components: {
      TheSidebarMenu
    }
  };
</script>
