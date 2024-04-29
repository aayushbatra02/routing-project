<template>
  <div class="flex items-center justify-center mt-4 sm:mt-5 lg:mt-6 sm:text-lg">
    <RouterLink
      v-for="(item, id) in navItems"
      :key="id"
      :to="item === 'home' ? '/' : `/${item}`"
      class="cursor-pointer text-blue-900 capitalize px-3"
      :class="[
        id === 0 && $route.path === '/jobs' ? 'border-r border-black' : null,
        id === 1 && $route.path === '/' ? 'border-r border-black' : null,
      ]"
      activeClass="bg-red-500 text-white py-1 rounded font-bold border-none"
    >
      {{ item }}
    </RouterLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: ["home", "about", "jobs"],
    };
  },
};
</script>
