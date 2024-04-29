<template>
  <div>
    <navBar />
    <div
      class="flex flex-col mt-8 gap-2 lg:gap-4 w-max m-auto border-2 border-black p-4 lg:p-6 rounded sm:text-lg lg:text-2xl"
    >
      <div class="flex flex-row">
        <div class="w-[8rem] lg:w-[10rem] font-bold">Job Id</div>
        <div class="text-blue-900 font-bold">{{ jobId }}</div>
      </div>
      <div class="flex flex-row">
        <div class="w-[8rem] lg:w-[10rem] font-bold">Job Title</div>
        <div class="text-blue-900 font-bold">{{ job.title }}</div>
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
      jobId: this.$route.params.jobId,
      job: null,
    };
  },
  created() {
    this.getJob();
  },
  methods: {
    getJob() {
      this.job = data.find((job) => Number(job.id) === Number(this.jobId));
    },
  },
};
</script>
  