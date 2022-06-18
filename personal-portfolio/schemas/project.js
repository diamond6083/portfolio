export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields:[
        {
            name: 'projectNo',
            type: 'number',
            title: 'Project No'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'projectDomain',
            type: 'string',
            title: 'Project Domain',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200)
            }
        },
        {
            name: 'projectImage',
            type: 'image',
            title: 'Project Image',
            options: {
                hotspot: true
            }
        }
    ]
}