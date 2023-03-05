<template>
    <div class="">
        <h1 data-aos="fade-right" class="sm:text-5xl text-5xl font-bold text-gray-900 text-center ">
            Zidy Blog and Articles
        </h1>

        <div data-aos="fade-up">
            <div class="border border-gray-500 mt-16 "> </div>

            <div class="flex py-2 justify-center items-center  text-gray-500">
                <h1 class="text-lg sm:py- px-5 hover:text-red-500 ">Tips</h1>
                <svg @click="input == true ? input = false : input = true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="w-6 hover:text-gray-900 cursor-pointer h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>

            <div v-if="input" class="flex justify-center my-2">
                <input type="text"  placeholder="Search For ..." class="text-2xl ">
            </div>
            <div class="border border-gray-500"> </div>



        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            input: false
        }
    }
}
</script> 



<!-- <script>

export default {
    data() {
        return {
            filteredList: [],
            lists: [

                {
                    name: 'Apple MacBook Pro 17"',
                    color: 'Silver',
                    catagory: 'Laptop',
                    price: '$2999'
                },
                {
                    name: 'Apple MacBook Pro 16"',
                    color: 'Black',
                    catagory: 'Laptop',
                    price: '$2599'
                },
                {
                    name: 'Apple MacBook Pro 15"',
                    color: 'Gray',
                    catagory: 'Laptop',
                    price: '$1999'
                },
                {
                    name: 'Apple MacBook Pro 14"',
                    color: 'Red',
                    catagory: 'Laptop',
                    price: '$1599'
                },
                {
                    name: 'Iphone Pro 14"',
                    color: 'White',
                    catagory: 'Mobile',
                    price: '$2499'
                },
                {
                    name: 'Iphone Pro 13"',
                    color: 'Black',
                    catagory: 'Mobile',
                    price: '$1999'
                },
                {
                    name: 'Apple MacBook Pro 12"',
                    color: 'Gray',
                    catagory: 'Mobile',
                    price: '$1399'
                },
                {
                    name: 'Iphone Pro 53"',
                    color: 'Silver',
                    catagory: 'Tablet',
                    price: '$3599'
                },
                {
                    name: 'Iphone Pro 28"',
                    color: 'Gray',
                    catagory: 'Tablet',
                    price: '$2999'
                },
                {
                    name: 'Iphone Pro 49"',
                    color: 'Black',
                    catagory: 'Tablet',
                    price: '$2599'
                },
                {
                    name: 'Headphone Pro 19"',
                    color: 'Black',
                    catagory: 'Headphone',
                    price: '$2399'
                },
                {
                    name: 'Headphone Pro 19"',
                    color: 'Gray',
                    catagory: 'Headphone',
                    price: '$1999'
                },
                {
                    name: 'Airbuds Pro 23"',
                    color: 'Red',
                    catagory: 'Airbuds',
                    price: '$1799'
                },
                {
                    name: 'Airbuds Pro 23"',
                    color: 'Silver',
                    catagory: 'Airbuds',
                    price: '$2399'
                }


            ],

            input: false,
            number: 0,


            search: '',

        }
    },
    mounted() {
        this.filteredList = this.lists

    },
    methods: {




        searchclick() {
            this.filteredList = this.lists.filter(x => x.name.includes(this.search))
        },



    }

}
</script>
<template>
    <div class="flex pt-40">

        <div class="relative overflow-x-auto">

            <div class="flex">
                <div class="mx-3 flex ">
                    <input v-model="search" @input="searchclick" type="text"
                        class="rounded-l-3xl focus:blue-600 border-2 h-12 border-gray-400 px-4 py-1 text-lg "
                        placeholder="Search">
                    <div class="border-2  border-gray-400 rounded-r-3xl py-1 px-5 h-12 ">

                    </div>

                </div>




            </div>

            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody v-for="(list, number) in filteredList">
                    <div>

                    </div>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">



                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ list.name }}
                        </th>
                        <td class="px-6 py-4">
                            {{ list.color }}
                        </td>
                        <td class="px-6 py-4">
                            {{ list.catagory }}
                        </td>
                        <td class="px-6 py-4">
                            {{ list.price }}
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>



    </div>
</template>    -->