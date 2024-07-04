<script>
    import { Cancel } from "$lib/scripts/logos";
    import Button from "../ui/Button.svelte";
    import Input from "../ui/Input.svelte";
    import { addProductPanel } from "$lib/scripts/stores/values";
    import { closeProductPanel } from "$lib/scripts/stores/functions";
</script>

{#if $addProductPanel}
    <div class="fixed inset-0 flex items-center justify-center z-40 text-black">
        <div class="flex flex-col gap-4 bg-[#ffffff] w-full max-w-[800px] h-[200px] rounded-lg shadow-xl py-4">
            <button
                class="ml-auto px-4"
                on:click={() => closeProductPanel()}
            >
                {@html Cancel()}
            </button>

            <div class="grid grid-cols-4 w-[95%] mx-auto text-sm px-4 py-2 border-b border-zinc-300" >
                <p class="text-left" >Name</p>
                <p class="text-center">Quantity</p>
                <p class="text-center">Price</p>
                <p class="text-right">Subtotal</p>
            </div>

            <div class="grid grid-cols-4 gap-2 w-full text-sm text-black px-4" >
                <Input 
                    name="test"
                    id="test"
                    title={false}
                />

                <Input 
                    name="test"
                    id="test"
                    title={false}
                    type="number"
                />

                <Input 
                    name="test"
                    id="test"
                    title={false}
                    type="number"
                />

                <div class="flex items-center justify-center w-full border border-zinc-300 rounded-lg" >
                    Subtotal here
                </div>
            </div>

            <div class="ml-4 mr-auto" >
                <Button 
                    text="Add item"
                />
            </div>
        </div>
    </div>

    <div class="fixed w-screen h-screen bg-black opacity-50 z-30" ></div>
{/if}