import { createClient, ContentfulClientApi } from 'contentful'

let contentfulClient: ContentfulClientApi | null = null

export function getContentfulClient(): ContentfulClientApi {
    if (contentfulClient) {
        return contentfulClient
    }

    const spaceId = process.env.CONTENTFUL_SPACE_ID
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

    if (!spaceId || !accessToken) {
        throw new Error(
            'Contentful credentials missing. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN environment variables.'
        )
    }

    contentfulClient = createClient({
        space: spaceId,
        accessToken: accessToken,
    })

    return contentfulClient
}

// Optional: Preview client for draft content
export function getPreviewClient(): ContentfulClientApi {
    const spaceId = process.env.CONTENTFUL_SPACE_ID
    const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN

    if (!spaceId || !previewToken) {
        throw new Error(
            'Contentful preview credentials missing. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_PREVIEW_TOKEN environment variables.'
        )
    }

    return createClient({
        space: spaceId,
        accessToken: previewToken,
        host: 'preview.contentful.com',
    })
}
