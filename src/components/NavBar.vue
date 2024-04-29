<template>
  <div
    class="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 lg:mt-6 sm:text-lg"
  >
    <RouterLink
      activeClass="bg-red-500 text-white py-1 px-2 rounded  font-bold"
      class="cursor-pointer text-blue-900"
      to="/"
      >Home</RouterLink
    >
    <div v-if="$route.path.startsWith('/jobs')">|</div>
    <RouterLink
      activeClass="bg-red-500 text-white py-1 px-2 rounded  font-bold"
      class="cursor-pointer text-blue-900"
      to="/about"
      >About</RouterLink
    >
    <div v-if="$route.path === '/'">|</div>
    <RouterLink
      activeClass="bg-red-500 text-white py-1 px-2 rounded  font-bold"
      :class="{
        'bg-red-500 text-white py-1 px-2 rounded  font-bold':
          $route.path.startsWith('/jobs'),
      }"
      class="cursor-pointer text-blue-900"
      to="/jobs"
      >Jobs</RouterLink
    >
  </div>
</template>

