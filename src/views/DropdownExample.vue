<template>
  <div class="flex items-center justify-center">
    <div class="relative">
      <div v-if="open" @click="open = false" class="fixed inset-0"></div>
      <button @click="open = !open" class="relative px-4 py-2 bg-blue-500 text-white font-semibold rounded focus:outline-none focus:shadow-outline">
        Open
      </button>
      <transition>
        <div v-if="open" class="dropdown-menu absolute right-0 mt-2 w-64 bg-white rounded-lg border shadow-md px-2 py-2">
          <ul>
            <li>
              <a href="#" class="block px-2 py-1 rounded hover:bg-blue-100">Item 1</a>
            </li>
            <li class="mt-1 ">
              <a href="#" class="block px-2 py-1 rounded hover:bg-blue-100">Item 2</a>
            </li>
            <li class="mt-1 ">
              <a href="#" class="block px-2 py-1 rounded hover:bg-blue-100">Item 3</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
}
</script>

<style>
  .dropdown-menu {
    transform-origin: top right;
  }
  .v-enter-active.dropdown-menu {
    transition: all .05s cubic-bezier(.25, .46, .45, .94);
  }
  .v-leave-active.dropdown-menu {
    transition: all .15s cubic-bezier(.55, .085, .68, .53);
  }
  .v-enter.dropdown-menu,
  .v-leave-to.dropdown-menu {
    opacity: 0;
    transform: scale(.7);
  }
  .v-enter-to.dropdown-menu,
  .v-leave.dropdown-menu {
    opacity: 1;
    transform: scale(1);
  }
</style>
