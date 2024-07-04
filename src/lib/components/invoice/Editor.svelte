<script>
    import { clickOutside } from "$lib/scripts/functions/misc";
    import { Add, Cancel } from "$lib/scripts/logos";
    import { closeEditor, openProductPanel } from "$lib/scripts/stores/functions";
    import { editorOpen } from "$lib/scripts/stores/values";
    import { slide } from "svelte/transition";
    import Input from "../ui/Input.svelte";
    import AddProduct from "./AddProduct.svelte";
</script>

<AddProduct />

{#if $editorOpen}
    <div 
        class="fixed flex flex-col gap-10 left-0 h-screen w-full max-w-[500px] bg-[#f1f1f1] z-20 text-black px-4 py-6 overflow-y-auto" 
        use:clickOutside
        on:outside={closeEditor}
        transition:slide={{ axis: "x" }}
    >
        <button
            class="p-2"
            on:click={() => closeEditor()}
        >
            {@html Cancel()}
        </button>

        <div class="flex flex-col gap-6" >
            <Input 
                name="Company Name"
                id="company-name"
            />

            <Input 
                name="Company Address / Description"
                id="company-description"
                placeholder="123 Top St, Maine, MA 94100"
            />
            
            <Input 
                name="Date Issued"
                id="date-issued"
                placeholder="4/2/1993"
            />

            <Input 
                name="Invoice Number"
                id="invoice-number"
            />

            <Input 
                name="Issued To"
                id="issued-to"
                placeholder="John Doe"
            />

            <Input 
                name="Company Logo"
                id="company-logo"
                placeholder="Image URL"
            />

            <Input 
                name="Currency"
                id="currency"
                maxTextLength={2}
            />

            <Input 
                name="Terms and Conditions"
                id="tos"
                maxTextLength={1000}
                textarea={true}
            />

            <button 
                class="flex items-center justify-between w-full py-2 px-2 border border-zinc-400 text-sm rounded-lg" 
                on:click={openProductPanel}
            >
                <p>Add Products</p>
                {@html Add("#000000", "24px")}
            </button>
        </div>
    </div>

    <div class="fixed w-screen h-screen bg-black opacity-50 z-10" ></div>
{/if}   