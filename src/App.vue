<template>
  <div id="app" class="antialiased flex flex-col min-h-screen bg-gray-200">
    <div class="flex-shrink-0">
      <router-link to="/dropdown">Dropdown</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view class="flex-1"/>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
