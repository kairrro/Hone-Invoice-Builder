<script>
    import { Discord, Twitter } from "$lib/scripts/logos";
</script>

<footer class="w-full max-w-[1279px] mx-auto" >
    <div class="flex items-center gap-20 py-16 px-6 md:px-4 md:flex-col md:gap-10 md:items-start">
        <div class="flex flex-col items-end gap-2 md:items-start md:gap-4">
            <a 
                class="flex items-center gap-2 hover:scale-105 transition md:items-start md:flex-col md:gap-4" 
                href="/"
            >
                <img 
                    src="/favicon.png" 
                    alt="logo"
                    class="w-16"
                />
                <h2 class="text-3xl font-medium" >Template</h2> 
            </a>
            <p class="text-sm" >Copyright © Template 2024</p>
        </div>

        <div class="flex flex-col gap-2 text-sm">
            <a 
                href="/privacy" 
                class="hover:underline underline-offset-2 mr-auto" 
            >
                Privacy
            </a>
            <a 
                href="/faq" 
                class="hover:underline underline-offset-2 mr-auto" 
            >
                FAQ
            </a>
            <a 
                href="/tos" 
                class="hover:underline underline-offset-2 mr-auto" 
            >
                Terms of Service
            </a>
        </div>

        <div class="flex flex-col gap-2 text-sm">
            <a 
                href="/login"
                class="hover:underline underline-offset-2 mr-auto" 
            >
                Login
            </a>
            <a 
                href="/register"
                class="hover:underline underline-offset-2 mr-auto" 
            >
                Register
            </a>
            <a 
                target="_blank" 
                class="hover:underline underline-offset-2 mr-auto" 
                href="https://hone.mysellix.io/product/65d8bf1f87d6c"
            >
                Premium
            </a>
        </div>

        <div class="flex items-center gap-8">
            <a href="/" target="_blank" class="hover:scale-110 transition">
                {@html Discord("#f1f1f1", "34px")}
            </a>

            <a href="/" target="_blank" class="hover:scale-110 transition" >
                {@html Twitter("#f1f1f1", "34px")}
            </a>
        </div>
    </div>
</footer>