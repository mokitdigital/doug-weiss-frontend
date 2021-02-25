<template>
  <b-container>
    <b-row>
      <b-col>
        <b-button v-b-toggle.sidebar-1>Cliente 1</b-button>

        <b-sidebar id="sidebar-1" title="Cliente 1" shadow>
          <div class="px-3 py-2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat modi assumenda velit
              laudantium temporibus delectus exercitationem deleniti iusto vero ut. Ipsa ullam aliquam
              doloremque quisquam minima suscipit beatae corporis voluptatibus.
            </p>
            <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
          </div>
        </b-sidebar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
