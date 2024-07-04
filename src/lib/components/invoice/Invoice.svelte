<script lang="ts">
    import { Warning, Money } from "$lib/scripts/logos";
    import type { InvoiceProduct } from "$lib/scripts/types/misc";

    export let invoiceNumber: string = "1";
    export let issuedTo: string = "";
    export let dateIssued: string = "";
    export let companyName: string = "";
    export let companyLogo: string = "";
    export let companyDescription: string = "";
    export let currency: string = "$";
    export let products: InvoiceProduct[] = [];
    export let termsAndConditions: string = "";
    export let paymentInformation: string[] = [];

    let subtotal: number = 0;

    products.forEach(element => {
        subtotal += element.price * element.quantity
    });
</script>

<svelte:head>
    <title>Invoice Builder | Hone</title>
</svelte:head>

<div class="flex flex-col gap-6 max-w-[850px] mx-auto text-black goofy mt-4 mb-40 pb-10 rounded-xl bg-[#F8F8F8] md:mx-4">
    <div class="flex items-start justify-between bg-[#ffffff] w-full rounded-t-xl p-8 md:px-4">
        <div class="flex flex-col items-start gap-[6px] text-xs text-zinc-500">
            <p class="text-xl font-semibold text-black">Website Payment</p>
            <div class="flex items-center gap-6 md:flex-col md:items-start md:gap-2">
                <p> 
                    Invoice Number: #{invoiceNumber}
                </p>
                <p> 
                    Issued to: {issuedTo}
                </p>
                <p> 
                    Date Issued: {dateIssued}
                </p>
            </div>
        </div>
    </div>

    <div class="flex flex-col mx-10 bg-[#ffffff] rounded-b-xl shadow-lg md:mx-2">
        <div class="flex flex-col">
            <div class="border-2 border-zinc-300 rounded-t-xl"></div>
            <div class="flex items-start justify-between py-4 px-6 md:px-2">
                <img
                    src={companyLogo}
                    alt="logo"
                    class="h-20"
                />
    
                <div class="flex flex-col items-end gap-[6px]">
                    <p class="font-semibold text-lg">{companyName}</p>
                    <p class="text-xs text-zinc-500">{companyDescription}</p>
                </div>  
            </div>
        </div>

        <div class="flex flex-col items-center justify-between rounded-lg border-[1px] border-zinc-300 mx-4 my-10">
            <div class="grid grid-cols-4 w-full border-b-[1px] border-zinc-300 px-6 py-[12px] text-xs md:px-2">
                <p class="text-left">Name</p>
                <p class="text-center">Quantity</p>
                <p class="text-center">Price</p>
                <p class="text-right">Subtotal</p>
            </div>

            {#each products as product}
                <div class="grid grid-cols-4 w-full border-b-[1px] border-zinc-300 px-6 py-[12px] text-xs md:px-2">
                    <p class="text-left">{product.name}</p>
                    <p class="text-center">{product.quantity}</p>
                    <p class="text-center">{currency}{product.price.toFixed(2)}</p>
                    <p class="text-right">{currency}{(product.price * product.quantity).toFixed(2)}</p>
                </div>
            {/each}

            <div class="flex items-center justify-between w-full px-6 py-[12px] text-xs md:px-2">
                <p class="text-left">Total</p>
                <p class="font-semibold" >{currency}{subtotal.toFixed(2)}</p>
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-2 mx-10 md:mx-2" >
        <p class="font-medium text-sm" >Timeline</p>

        <div class="flex flex-col gap-8 bg-[#ffffff] rounded-xl shadow-lg p-8 md:px-4">
            <div class="flex items-center gap-4 text-xs" >
                <div class="p-2 bg-zinc-200 rounded-full" >
                    {@html Warning("20px", "#0f0f0f")}
                </div>
                <div class="flex flex-col gap-[6px]" >
                    <p class="font-medium" >Terms and Conditions</p>
                    <p class="text-zinc-500" >
                        {termsAndConditions}
                    </p>
                </div>
            </div>

            <div class="flex items-center gap-4 text-xs" >
                <div class="p-2 bg-zinc-200 rounded-full" >
                    {@html Money("#0f0f0f", "20px")}
                </div>
                <div class="flex flex-col gap-[6px]" >
                    <p class="font-medium" >Payment Information</p>
                    <div class="flex flex-col text-zinc-500" >
                        {#each paymentInformation as payment}
                            <p>{payment}</p>
                        {/each} 
                    </div>
                </div>
            </div>
        </div>
    </div>

    <a 
        href="https://services.hone.lol"
        target="_blank"
        class="text-xs ml-auto px-10 underline"
    >
        <p>Made with Hone @ 2024</p>
    </a>
</div>
