import budgetImage from '../../assets/images/budget-tracker.jpg'
import deepThoughtsImage from '../../assets/images/deep-thoughts.jpg'
import skiHausImage from '../../assets/images/ski-haus.jpg'
import pawgersImage from '../../assets/images/pawgers.jpg'
import noteTakerImage from '../../assets/images/note-taker.jpg'
import techBlogImage from '../../assets/images/tech-blog.jpg'


const projects = [
    {
        name: 'Ski Haus',
        githubURL: 'https://github.com/Thesselonian/skiHaus',
        image: skiHausImage,
        deployedURL: 'http://ski-haus.herokuapp.com/',
        altTag: 'Ski Haus Logo'
    },
    {
        name: 'Pawgers',
        githubURL: 'https://github.com/Thesselonian/Pawgers',
        image: pawgersImage,
        deployedURL: 'https://pawgers.herokuapp.com',
        altTag: 'Pawgers Logo'
    },
    {
        name: 'Deep Thoughts',
        githubURL: 'https://github.com/Thesselonian/deep-thoughts',
        image: deepThoughtsImage,
        deployedURL: 'https://deep-thoughts-1991.herokuapp.com',
        altTag: 'Deep Thoughts Logo'
    },
    {
        name: 'Note Taker',
        githubURL: 'https://github.com/Thesselonian/express-note-take',
        image: noteTakerImage,
        deployedURL: 'https://note-taker-1991.herokuapp.com',
        altTag: 'Note Taker Logo'
    },
    {
        name: 'Tech Blog',
        githubURL: 'https://github.com/Thesselonian/Tech-Blog',
        image: techBlogImage,
        deployedURL: 'https://tech-blog-1991.herokuapp.com/',
        altTag: 'Tech Blog Logo'
    },
    {
        name: 'Budget Tracker',
        githubURL: 'https://github.com/Thesselonian/budget-tracker',
        image: budgetImage,
        deployedURL: 'https://budget-tracker-1991.herokuapp.com/',
        altTag: 'Budget Tracker Logo'
    }
]

export default projects