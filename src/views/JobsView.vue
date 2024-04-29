<template>
  <div>
    <navBar />
    <div class="flex flex-col items-center mt-8">
      <div class="flex justify-center text-xl md:text-2xl lg:text-3xl font-bold mb-4">Jobs</div>
      <div
        class="bg-gray-200 mb-2 lg:mb-4 w-[60%] md:w-[40%] xl:w-[30%] text-center py-2 rounded cursor-pointer text-xl md:text-2xl lg:text-3xl"
        v-for="job in jobs"
        :key="job.id"
        @click="goToDetails(job.id)"
      >
        {{ job.title }}
      </div>
    </div>
  </div>
</template>
  
<script>
import data from "../data.json";
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      jobs: data,
    };
  },
  methods: {
    goToDetails(id) {
      this.$router.push({ name: "jobDetail", params: { jobId: id } });
    },
  },
};
</script>
  