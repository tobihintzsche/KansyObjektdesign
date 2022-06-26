import React from 'react'
import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import Layout from '../../components/Layout'
import LandingPage from '../../components/LandingSection'

interface IReference {
    id: string
    slug: string
    referenceName: string
    referenceImage: IReferenceImage
    images: Array<IImages>
}

interface IImages {
    url: string
}

interface IReferenceImage {
    url: string
}

const client = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/cl4v7smn11c4201ui7iffb8m6/master'
)

const testObject = {
    reference: {
        id: 'cl4v8yex7j34j0ct9buhohwfs',
        slug: 'restaurant',
        referenceName: 'Restaurant',
        referenceImage: {
            url: 'https://media.graphassets.com/wej4jCGLR3zFPfCune0o',
        },
        images: [
            {
                url: 'https://media.graphassets.com/pxE9ASNXSg2jhyFEwDlM',
            },
            {
                url: 'https://media.graphassets.com/toYb1U7mQ3qxwOleChvM',
            },
            {
                url: 'https://media.graphassets.com/0ftEvP4aQpeGmbKpAJ3K',
            },
            {
                url: 'https://media.graphassets.com/REAQDHgRS6TI2c0TyC9g',
            },
            {
                url: 'https://media.graphassets.com/LikoehnuTzCge1RSmloP',
            },
            {
                url: 'https://media.graphassets.com/U0iHB9kRcGXhw1jcmJzA',
            },
        ],
    },
}

console.log(testObject.reference)

export default function Reference({ reference }: { reference: IReference }) {
    console.log(reference.images)

    return (
        <>
            <Layout>
                <LandingPage
                    text={reference.referenceName}
                    backgroundImage={reference.referenceImage.url}
                />

                <section>
                    <div className="grid grid-cols-2">
                        {reference.images.map((image: IImages) => {
                            return (
                                <div className="container">
                                    <img
                                        src={image.url}
                                        className="object-cover h-96 w-full"
                                        alt="imgsrc1"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </section>
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params!.slug as string

    console.log(slug)

    const query = gql`
        query MyQuery($slug: String!) {
            reference(where: { slug: $slug }) {
                id
                slug
                referenceName
                referenceImage {
                    url
                }
                images {
                    url
                }
            }
        }
    `
    const data = await client.request(query, {
        slug,
    })

    // Handle beitrag slugs which don't exist in our CMS
    if (!data.reference) {
        return {
            notFound: true,
        }
    }

    // Provide Props to the Page Component
    return {
        props: {
            reference: data.reference,
        },

        revalidate: 60 * 60, // Cache response for 1 hour (60 seconds * 60 minutes)
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const query = gql`
        query GetReferences {
            references {
                slug
            }
        }
    `

    const data = await client.request(query)

    return {
        paths: data.references.map((reference: IReference) => ({
            params: { slug: reference.slug },
        })),
        fallback: 'blocking',
    }
}
