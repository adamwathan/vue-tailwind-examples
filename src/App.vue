<template>
  <div id="app" class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-200">
    <router-view class="flex-1"/>
    <div class="flex-shrink-0 py-12 text-center">
      <div>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/dropdown">Dropdown</router-link>
        <span class="mx-4 text-gray-500">|</span>
        <router-link class="font-semibold text-gray-700 hover:underline" to="/modal">Modal</router-link>
      </div>
      <div class="mt-2">
        <a href="https://github.com/adamwathan/vue-tailwind-examples" class="text-sm font-semibold text-gray-600 hover:underline">
          Source on GitHub
        </a>
      </div>
    </div>
    <portal-target name="modals"></portal-target>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.origin-top-right {
  transform-origin: top right;
}
.transition-all {
  transition-property: all;
}
.transition-fastest {
  transition-duration: 50ms;
}
.transition-faster {
  transition-duration: 100ms;
}
.transition-fast {
  transition-duration: 150ms;
}
.transition-medium {
  transition-duration: 200ms;
}
.ease-out-quad {
  transition-timing-function: cubic-bezier(.25, .46, .45, .94);
}
.ease-in-quad {
  transition-timing-function: cubic-bezier(.55, .085, .68, .53);
}
.scale-70 {
  transform: scale(.7);
}
.scale-100 {
  transform: scale(1);
}
</style>
