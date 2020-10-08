import React from "react";
import { Typography, Grid } from "@material-ui/core";

const listItems = (...list) =>
  list.map((x) => (
    <li key={x}>
      <Typography>{x}</Typography>
    </li>
  ));

const JobHistoryPage = () => {
  return (
    <>
      <Grid item>
        <img
          style={{ width: 400 }}
          src="images/probotics.jpg"
          alt="Probotics Logo"
        />
      </Grid>
      <Grid item>
        <Typography variant="h5">
          Junior Developer and Solution Designer - Probotics (March 2020 -
          October 2020)
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          This role is being made redundant at the end of October due to a
          merger, however I really enjoyed my time working here, and through
          this job I have gained experience in a wide range of technologies.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          Most of my time here has involved working with clients to design and
          build automated/streamlined digital replacements for business
          processes. This includes:
        </Typography>
        <ul>
          {listItems(
            "Guiding clients and recommending the most suitable tool for a task, most commonly UiPath or C#.",
            "Web application development, using React JS and ASP.Net Core.",
            "Interacting with clients directly, both remotely and on site as the only company representative.",
            "Design, development, deployment, and support for the following client projects (amongst others):"
          )}
          <ul>
            {listItems(
              "Automation of the bank reconciliation process for ACC.",
              "Automation of the Regional Business Partners data scraping process for ATEED (part of Auckland council).",
              "The automated debtor chasing process for Port of Tauranga (received 10/10 feedback from client).",
              "An employee data reconciliation bot for the Department of Conservation.",
              "The auditing part of an invoice automation web application, involving front end and backend development, for Toll Group."
            )}
          </ul>
          {listItems(
            "Developing a bot that enters invoice data scraped from invoices by ABBYY into Tech One for C3."
          )}
        </ul>
      </Grid>
      <Grid item>
        <Typography>
          When I wasn't working on client projects at Probotics, I spent my time
          designing and building in house web applications. These were built
          using React JS for the front end, ASP.NET Core for the back end, and
          SQL Express for the database.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          The main in house project that I worked on was a procure to pay
          solution that automatically matched invoices with purchase orders
          created and approved within the application. I wrote the design for
          this application along with most of the code and database design. I
          also helped deploy it to Azure as an IIS web server.
        </Typography>
      </Grid>
    </>
  );
};

export default JobHistoryPage;
