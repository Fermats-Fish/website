import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  technology: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  icon: {
    width: 150,
    maxWidth: "20%",
    flexShrink: 0,
    marginRight: theme.spacing(3),
  },
  techBox: {
    display: "flex",
    flexShrink: 1,
    flexDirection: "column",
  },
}));

const TechPage = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item>
        <Typography>
          I have worked with a wide variety of technologies both at work and
          whilst working on personal projects in my spare time. Below is a list
          of the technologies I have worked with, and a brief description of my
          experience with each of them.
        </Typography>
      </Grid>
      {[
        [
          "js.jpg",
          "JavaScript",
          <Typography>
            I first worked with JavaScript in my last year of school, when I
            created a version of the classic snake game for multiple players on
            the same computer. Most of my work with JavaScript however has come
            more recently from building React applications (like this one). Over
            the past six months especially I have spent a lot of my time
            programming in JavaScript, so I have become very familiar with it.
          </Typography>,
        ],
        [
          "react.jpg",
          "React JS",
          <Typography>
            I first worked with React at the beginning of my employment at
            Probotics and very quickly grew to love it. I've spent most of my
            time with React using functional components and hooks such as
            useState and useMemo, since I find functional components more
            natural to use compared to class components. The main projects I
            have built using React include a shopping site I made for Probotics,
            this website, and a Procure to Pay solution for Probotics that
            involved sending http requests to and from the backend that I had
            created using ASP.NET Core.
          </Typography>,
        ],
        [
          "csharp.jpg",
          "C#",
          <Typography>
            My first experiences working with C# come from creating games with
            Unity. I have completed more than 10 projects with Unity, and as
            such have gained considerable fluency using C# code. More recently I
            have used C# to create the backend for a Procure to Pay solution
            using ASP.NET Core, and to create scripts using .NET Framework to
            automate business processes. One example is that I created a .NET
            Framework application which connected to a database of invoices
            weekly, then sent reminder emails in 3 stages to all debtors who
            hadn't paid their invoices. This program also attached word
            documents to many of these emails by substituting various keywords
            from a template file with relevant fields / tables.
          </Typography>,
        ],
        [
          "python.jpg",
          "Python",
          <Typography>
            Python was the first programming language that I ever learnt, back
            in my last year of primary school. Ever since then I have built many
            projects using python, starting from very basic command prompt maze
            games, eventually building up to an application that allows you to
            play an abstract strategy game I invented. This application was
            complete with an interactive move history, the ability to save/load
            previously played games, and support for any number of players.
            These days Python is usually my go to language if I want to write a
            really quick command line program.
          </Typography>,
        ],
        [
          "uipath.jpg",
          "UiPath",
          <Typography>
            UiPath is the main software I used for building automation workflows
            at Probotics. It's main strength comes from how easily it can
            interact with any part of an application or website. UiPath is built
            on top of Visual Basic, so through using UiPath I also learnt a
            certain amount about writing Visual Basic Code. Whilst I do enjoy
            creating workflows in UiPath, I find the drag and drop interface a
            little bit cumbersome, and much prefer writing code directly where
            possible. Having said that if I need to write a program that has to
            interact with a website or desktop application, I will probably end
            up using UiPath.
          </Typography>,
        ],
        [
          "java.jpg",
          "Java",
          <Typography>
            I haven't spent as much time using Java as the other languages I
            have listed here, however I did do a computer science course at
            university where we did our programming solely using Java. I like
            the structure of the language, and find it easy to use because of
            its similarities to C# which I have used extensively.
          </Typography>,
        ],
        [
          "ssms.jpg",
          "SQL Server Management Studio (SSMS)",
          <Typography>
            All of the backend development I have done has involved programming
            using ASP.NET Core, and connecting that to an SQL Server to store
            all of the relevant data for the application. To modify the SQL
            databases I used SSMS, and have become very familiar with using it
            to modify table structures, create relationships between columns,
            and even deal with annoying SQL server account permission issues.
          </Typography>,
        ],
        [
          "unity.jpg",
          "Unity",
          <Typography>
            Unity is the main tool I use for creating games, especially during
            game programming competitions. Over the years I have made at least
            10 complete games using Unity and C#, so I have become quite
            familiar with how to use it. I have also used it in the past to help
            me visualize things in 3 dimensions. For example when learning
            physics at university I created a simple project in Unity that
            allowed you to visualize the magnetic forces that two particles have
            on each other at varying positions / velocities.
          </Typography>,
        ],
      ].map(([image, title, description]) => (
        <Grid item className={classes.technology}>
          <img
            className={classes.icon}
            src={"/images/technologies/" + image}
            alt={title + " Logo"}
          />
          <div className={classes.techBox}>
            <Typography variant="h4">{title}</Typography>
            <Typography>{description}</Typography>
          </div>
        </Grid>
      ))}
      <Grid item>
        <Typography>
          In addition to the programming languages listed here I have also
          dabbled in many other programming languages, and tend to be able to
          pick them up quite quickly.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          Some of the other tools/programming languages I have used include:
          HTML, CSS, SQL, C, Git, Visual Studio, Visual Studio Code, Sci-Kit
          Learn (the python package), Weka (a machine learning tool), Haskell,
          and LateX.
        </Typography>
      </Grid>
    </>
  );
};

export default TechPage;
