# LangX

A platform for learning French and Spanish grammar and vocabulary. There will be two principal elements. 

1. A blog style section which will explain the six core areas (articles & nouns, pronouns, adjectives, adverbs, verbs…) using markdown.
2. A flashcard style element to practice vocabulary and sentence structure.

### Technologies.

The backend will be written in Python using Django. The frontend will be written in HTML/CSS/Javascript with React.

### Authorization

To start with, there will be no user accounts or authorization, this may be added in at a later date.

### Back End

Built in Django using Django Rest Framework. There will be models for:

- Grammar Concepts (parent)
- Grammar Concept Blog
- Grammar Concept Test
- Vocabulary

### Front End

Built in React. There will be pages and routing for:

**Landing page**
To display links (cards) for each Grammar Blog Article and Test
 
**Grammar Blog Article page**
This will display the grammar blog for the specific article using markdown. There will also be a link to the test page

**Flash Card test page**
This will be a duolingo style test of word/sentence write and check. This will display a score at the end.

### Future Developments
- User account
- Record scores
- Score tracking

