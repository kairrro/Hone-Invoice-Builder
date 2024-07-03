<script lang="ts">
    import type { InvoiceProduct } from "$lib/scripts/types/misc";
    import Invoice from "$lib/components/Invoice.svelte";

    const dummyProducts: InvoiceProduct[] = [
        {
            name: "Database Management",
            quantity: 1,
            price: 100,
        },
        {
            name: "Website Development",
            quantity: 1,
            price: 600,
        },
    ]
</script>

<svelte:head>
    <title>Hone Invoice Builder</title>
    <meta property="og:title" content={`Hone Invoice Builder`}>
    <meta property="og:description" content="Create invoices with Hone Invoice Builder">
    <meta property="og:image" content="/favicon.png">
</svelte:head>

<Invoice
    invoiceNumber="001"
    issuedTo="John Doe"
    dateIssued="7/3/2024"
    companyName="Hone Services"
    companyLogo="/assets/logo.png"
    companyDescription="https://services.hone.lol"
    products={dummyProducts}
    currency="$"
    termsAndConditions="Payment must be made within 3 days. Failure to pay within the given time will have your website closed until transaction is complete"
    paymentInformation={[
        "Bank: First Bank | Account Number: 3146316899"
    ]}
/>