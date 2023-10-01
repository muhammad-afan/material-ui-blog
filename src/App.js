import './App.css';
import { Container, Grid } from '@mui/material';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import { featuredPosts, mainFeaturedPost, sidebar } from './Data/Data';
import PostCard from './components/PostCard';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  const theme = useTheme()
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        {
          mainFeaturedPost.map((post) => (
            <FeaturedPost post={post} key={post.title} />
          ))
        }
        <Grid
          container
          marginTop={'1px'}
          // rowSpacing={1}
          // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          spacing={4}
        >
          {
            featuredPosts.map((post) => (
              <PostCard post={post} />
            ))
          }
        </Grid>
        <Grid
          marginTop={theme.spacing(3)}
          container
          spacing={5}
        >
          <Main title='From the Firehose' />
          <SideBar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
        title='Footer'
        description='Something here to give the footer a purpose'
      />
    </ThemeProvider>
  );
}

export default App;
