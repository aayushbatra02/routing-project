<template>
  <div class="flex items-center justify-center gap-2 mt-4 font-bold">
    <RouterLink
      activeClass="bg-red-500 text-white py-1 px-2 rounded"
      class="cursor-pointer text-blue-900"
      to="/"
      >Home</RouterLink
    >
    <div v-if="$route.path.startsWith('/jobs')">|</div>
    <RouterLink
      activeClass="bg-red-500 text-white py-1 px-2 rounded"
      class="cursor-pointer text-blue-900"
      to="/about"
      >About</RouterLink
    >
    <div v-if="$route.path === '/'">|</div>
    <RouterLink
      activeClass="bg-red-500 text-white py-1 px-2 rounded"
      :class="{
        'bg-red-500 text-white py-1 px-2 rounded':
          $route.path.startsWith('/jobs'),
      }"
      class="cursor-pointer text-blue-900"
      to="/jobs"
      >Jobs</RouterLink
    >
  </div>
</template>

