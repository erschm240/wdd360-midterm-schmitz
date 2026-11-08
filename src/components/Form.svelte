<script>
    import { searchHandler } from "../js/main";

    let query = $state("");
</script>

<form onsubmit={(event) => searchHandler(event, query)}>
    <label for="query">Search iNaturalistAPI</label><br>
    <input type="text" id="query" name="query" bind:value={query} placeholder="Search for a place..."/><br>
    <button type="submit">Search</button>
</form>

<style>
    form {
        padding: 2rem 3rem;
        border: 1px solid black;
        border-radius: 0.5rem;
        display: grid;
        text-align: center;
        min-width: min(1000px, 20%);
    }

    input {
        padding: 0.5rem;
    }

    button {
        padding: 0.5rem;
        min-width: min(100px, 40%);
        justify-self: center;
    }
</style>