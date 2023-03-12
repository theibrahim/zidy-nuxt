<template>
  <div ref="menu" :class="menuClass ? `bg-white   shadow-lg   sm:fixed` : isMenuPrimaryColored"
    class="flex justify-between items-center h-20 sm:fixed z-50 right-0 sm:w-full  ">
    <div class="sm:flex max-w-7xl mx-auto  justify-between items-center w-full   hidden">

      <div class="sm:mx-10 mx-5">

        <img src="./../assets/logo.svg" alt="" class="sm:w-auto w-36  ">
      </div>

      <div class="sm:mx-4 flex  mt-2 items-center ">

        <div>
          <NuxtLink to="/"> <button
              class="peer text-gray-600 text-xs mx-5 hover:text-teal-500 font-semibold duration-300 ease-out transition-all transition-medium hover:scale-110 ">Home</button>
          </NuxtLink>
        </div>

        <div>
          <button
            class="peer text-gray-600 text-xs mx-5 hover:text-teal-500 font-semibold duration-300 ease-out transition-all transition-medium hover:scale-110 ">
            Products
          </button>

          <div class="hidden  absolute origin-top-right peer-hover:flex hover:flex">
            <div class="w-[200px] pt-2 flex-col bg-white rounded-lg drop-shadow-lg">
              <NuxtLink to="/Rewiews"
                class="hover:text-teal-500 text-xs block px-4 py-2 text-gray-600 hover:bg-gray-50  font-normal">
                SMS 1- Click Rewiews
              </NuxtLink>
              <NuxtLink to="/zidychat"
                class="hover:text-teal-500 text-xs block px-4 py-2 text-gray-600 hover:bg-gray-50  font-normal">
                Zidy Chat
              </NuxtLink>

            </div>
          </div>
        </div>

        <div>
          <NuxtLink to="/Pricing"> <button
              class="peer text-gray-600 text-xs mx-5 hover:text-teal-500 font-semibold duration-300 ease-out transition-all transition-medium hover:scale-110 ">Pricing</button>
          </NuxtLink>
        </div>

        <div>
          <button
            class="peer text-gray-600 text-xs mx-5 hover:text-teal-500 font-semibold duration-300 ease-out transition-all transition-medium hover:scale-110 ">
            Company
          </button>

          <div class="hidden  absolute origin-top-right peer-hover:flex hover:flex">
            <div class="w-[200px] pt-2 flex-col bg-white rounded-lg drop-shadow-lg">
              <NuxtLink to="/company"
                class="hover:text-teal-500 text-xs block px-4 py-2 text-gray-600 hover:bg-gray-50  font-normal">
                About Us
              </NuxtLink>
              <NuxtLink to="/Jobs"
                class="hover:text-teal-500 text-xs block px-4 py-2 text-gray-600 hover:bg-gray-50  font-normal">
                Jobs
              </NuxtLink>
              <NuxtLink to="/Contact"
                class="hover:text-teal-500 text-xs block px-4 py-2 text-gray-600 hover:bg-gray-50  font-normal">
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>

        <div>
          <button
            class="peer text-gray-600 text-xs mx-5 hover:text-teal-500 font-semibold duration-300 ease-out transition-all transition-medium hover:scale-110 ">
            Resources
          </button>

          <div class="hidden  absolute origin-top-right peer-hover:flex hover:flex">
            <div class="w-[200px] pt-2 flex-col bg-white rounded-lg drop-shadow-lg">
              <NuxtLink to="/Blog"
                class="hover:text-teal-500 text-xs block px-4 py-2 text-gray-600 hover:bg-gray-50  font-normal">
                Blog
              </NuxtLink>
              <NuxtLink to="/Business"
                class="hover:text-teal-500 text-xs block px-4 py-2 text-gray-600 hover:bg-gray-50  font-normal">
                Google Bussiness Setup
              </NuxtLink>
              <NuxtLink to="/Map"
                class="hover:text-teal-500 text-xs block px-4 py-2 text-gray-600 hover:bg-gray-50  font-normal">
                Google Maps Registry
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>

      <div class="sm:mx-4 flex items-center">

        <NuxtLink to="/"> <button
            class="peer text-gray-600 text-xs mx-5  hover:text-teal-500 font-semibold duration-300 ease-out transition-all transition-medium hover:scale-110">Sign
            In</button>

        </NuxtLink>

        <button
          class="bg-teal-500 hover:scale-105 duration-300 font-semibold text-white text-xs py-2 px-6 rounded-lg hover:text-black">
          Try it free
        </button>
      </div>
    </div>

    <div class="sm:hidden mx-6 justify-between w-full flex">


      <div class="">
        <img src="./../assets/logo.svg" alt="" class="w-auto   ">
      </div>

      <div>
        <svg @click="heading == true ? heading = false : heading = true" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
          <title>Icon/Notification Copy</title>
          <g id="Icon/Notification-Copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path
              d="M24,18 C24.5522847,18 25,18.4477153 25,19 C25,19.5522847 24.5522847,20 24,20 L12,20 C11.4477153,20 11,19.5522847 11,19 C11,18.4477153 11.4477153,18 12,18 L24,18 Z M24,13 C24.5522847,13 25,13.4477153 25,14 C25,14.5522847 24.5522847,15 24,15 L6,15 C5.44771525,15 5,14.5522847 5,14 C5,13.4477153 5.44771525,13 6,13 L24,13 Z"
              id="Combined-Shape" fill="#000000" />
            <g id="UI/Notification" transform="translate(19.000000, 10.000000)">
              <circle id="Border" fill="#FFFFFF" cx="4" cy="4" r="4" />
              <circle id="Color" fill="#FF6363" cx="4" cy="4" r="2.66666667" />
            </g>
          </g>
        </svg>

      </div>
      <div class=" absolute bg-white z-[1999] h-screen top-20 right-0 bottom-0 left-0 buttom-0" v-if="heading">

        <div class="sm:mx-4 items-center mt-[120px]  ">
          <hr>
         
                                                                                    
          <div>
            <NuxtLink to="/"> <button @click="heading = fase"
                class="text-lg  font-semibold text-gray-600 hover:text-teal-500  my-3 mx-6">Home</button>
            </NuxtLink>
          </div>
          <hr>
          <div>
            <button
              class="peer text-lg mx-6 my-3  font-semibold text-gray-600 hover:text-teal-500 duration-300 e5e-out transition-all transition-medium hover:scale-110 ">
              Products
            </button>

            <div class="hidden  absolute origin-top-right peer-hover:flex hover:flex">
              <div class="  pt-2 ex-col bg-white rounded-lg drop-shadow-lg">
                <NuxtLink to="/Rewiews       " @click="heading = fase"
                  class="block px-4 py-2  font-semibold text-gray-600 hover:text-teal-500 hover:bg-gray-50">
                  SMS 1- Click Rewiews
                </NuxtLink>
                <NuxtLink to="/zidychat" @click="heading = fase"
                  class="block px-4 py-2  font-semibold text-gray-600 hover:text-teal-500 hover:bg-gray-50">
                  Zidy Chat
                </NuxtLink>
              </div>
            </div>
          </div>
          <hr>
          <div>
            <NuxtLink to="/Pricing"> <button @click="heading = fase"
                class="text-lg  font-semibold text-gray-600 hover:text-teal-500  my-3 mx-6">Pricing</button>
            </NuxtLink>
          </div>

          <hr>
          <div>
            <button
              class="peer  font-semibold text-gray-600 hover:text-teal-500 my-3 text-lg m-6 duration-300 ease-out transition-all transition-medium hover:scale-110 ">
              Company
            </button>
            <div class="hidden  absolute origin-top-right peer-hover:flex hover:flex">
              <div class="sm:mx-10  pt-2mx-5">
                <img src="./../assets/logo.svg" alt="" class="sm:w-auto w-36  ">
              </div>

              <div class="w-full flex-col bg-white rounded-lg drop-shadow-lg">
                <NuxtLink to="/company" @click="heading = fase"
                  class="block px-4 py-2  font-semibold text-gray-600 hover:text-teal-500 hover:bg-gray-50">
                  About Us
                </NuxtLink>
                <NuxtLink to="/Jobs" @click="heading = fase"
                  class="block px-4 py-2  font-semibold text-gray-600 hover:text-teal-500 hover:bg-gray-50">
                  Jobs
                </NuxtLink>
                <NuxtLink to="/Contact" @click="heading = fase"
                  class="block px-4 py-2  font-semibold text-gray-600 hover:text-teal-500 hover:bg-gray-50">
                  Contact Us
                </NuxtLink>
              </div>
            </div>
          </div>
          <hr>
          <div>
            <button
              class="peer  font-semibold text-gray-600 hover:text-teal-500 my-3 text-lg m-6 duration-300 ease-out transition-all transition-medium hover:scale-110 ">
              Resources
            </button>
            <div class="hidden  absolute origin-top-right peer-hover:flex hover:flex">
              <div class="w-full fl pt-2ex-col bg-white rounded-lg drop-shadow-lg">
                <NuxtLink to="/Blog"
                  class="block px-4 py-2   font-semibold text-gray-600 hover:text-teal-500 hover:bg-gray-50">
                  Blog
                </NuxtLink>
                <NuxtLink to="/Business" @click="heading = fase"
                  class="block px-4 py-2  font-semibold text-gray-600 hover:text-teal-500 hover:bg-gray-50">
                  Google Bussiness Setup
                </NuxtLink>
                <NuxtLink to="/Map" @click="heading = fase"
                  class="block px-4 py-2  font-semibold text-gray-600 hover:text-teal-500 hover:bg-gray-50">
                  Google Maps Registry
                </NuxtLink>
              </div>
            </div>
          </div>
          <hr>
          <NuxtLink to="/"> <button class="text-lg font-semibold text-gray-600 hover:text-[#34d399] my-3 mx-6">Sign
              In</button>
          </NuxtLink>
          <hr>
        </div>
        <div class="sm:mx-4 ">
          <button class="bg-teal-500 my-3 mx-5 text-white text-base py-2 px-6 rounded-lg hover:text-black">
            Try it free
          </button>
          <hr>
        </div>
      </div>
    </div>

  </div>
  <!-- <div v-if="$route.name == 'index'">
    <div class="zd-index-welcome-1 duration-75" style="margin-top: 0px">
      <img src="https://www.zidy.com/images/index-welcome-1.svg" />
    </div>
    <div id="zd-index-welcome-2" class="zd-index-welcome-2 transitionforimg duration-75">
      <img src="https://www.zidy.com/images/index-welcome-2.svg" />
    </div>
    <div id="zd-index-welcome-3" class="zd-index-welcome-3 transitionforimg duration-75">
      <img src="https://www.zidy.com/images/index-welcome-3.svg" />
    </div>
    <div id="zd-index-welcome-4" class="zd-index-welcome-4 transitionforimg duration-75">
      <img src="https://www.zidy.com/images/index-welcome-4.svg" />
    </div>
  </div> -->
</template>
<script>
export default {
  data() {
    return {
      scrollY: 0,
      heading: ''
    }
  },
  computed: {
    menuClass() {
      return this.scrollY > 0
    },
    isMenuPrimaryColored() {
      if (this.$route.name == 'index') { return 'bg--100' }
      else if (this.$route.name == 'zidychat') { return 'bg-sky-100' }
      else if (this.$route.name == 'Business') { return 'bg-green-100' }
      else { return '' }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
}
</script>



<style>
.zd-index-welcome-1 {
  @apply absolute top-0 left-[33.75%] w-[113px] opacity-[0.2] z-10
}

.zd-index-welcome-2 {
  @apply absolute left-[71.6%] w-[141px] opacity-[0.2] z-10;
}

.zd-index-welcome-3 {
  @apply absolute top-[28%] left-[calc(100%-170px)] w-[170px] opacity-[0.2] z-10;
}

.zd-index-welcome-4 {
  @apply absolute top-[35%] left-[5%] w-[141px] opacity-[0.2] z-10;
}
</style>