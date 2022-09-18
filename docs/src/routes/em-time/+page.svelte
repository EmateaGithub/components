<script>
    import { browser } from '$app/environment'
    import { html } from '../../../../components/em-time/README.md'

    if (browser)    
        import('@ematea/em-time/lib/define.js')
</script>

<svelte:head>
    <title>The em-time Element</title>
</svelte:head>

<article>
    {@html html}
</article>
