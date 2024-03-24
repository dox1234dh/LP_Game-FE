<template>
    <a-layout>
        <a-layout-content>
            <div class="h-screen bg-gradient-to-r from-purple-500 to-pink-500">
                <span class="text-3xl text-white absolute top-10 left-0 right-0 text-center">Chào mừng đến với chương
                    trình thử
                    nghiệm ứng dụng văn học vào trò
                    chơi
                </span>
                <div class="flex w-full h-full justify-center items-center flex-col space-y-5">
                    <slot />
                </div>
            </div>
        </a-layout-content>
    </a-layout>
</template>