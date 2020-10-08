import React from "react";

import { Grid, Typography } from "@material-ui/core";

const AboutMePage = () => {
  return (
    <>
      <Grid item>
        <Typography>
          I am a junior software developer with experience in full stack and RPA
          development. My current job involves working with clients to design
          and deliver automated/streamlined digital solutions to heavily manual
          business processes. These solutions usually involve doing RPA, either
          using UiPath or C# depending on the requirements. In addition the
          solutions will sometimes involve the development of a web application.
        </Typography>
      </Grid>
      <Grid style={{ width: "100%", textAlign: "center" }} item>
        <img
          alt="Me At a Computer"
          style={{ width: 600 }}
          src="images/working.jpg"
        />
      </Grid>
      <Grid item>
        <Typography>
          When I'm not working with clients I spend time working on in house
          projects. Recently I finished developing the first prototype of a web
          application designed to streamline the Procure to Pay process. The
          application allows users to create/approve purchase orders, which are
          then sent automatically to the relevant supplier. Then when invoices
          are received they are automatically compared to the relevant purchase
          orders. If the cost of items listed on the purchase order that have
          been received matches the cost of the invoice, then the invoice is
          approved. Otherwise it will either wait for receipting to be completed
          or require manual approval. I developed the application using React JS
          and ASP.NET Core.
        </Typography>
      </Grid>
      <Grid style={{ width: "100%", textAlign: "center" }} item>
        <img
          alt="Me Tramping"
          style={{ width: 300 }}
          src="images/tramping.jpg"
        />
      </Grid>
      <Grid item>
        <Typography>
          Before my current job I had recently graduated from the University of
          Auckland with BSc in Mathematics, achieving an average grade of A+ and
          top of class in 7 courses. I also had lots of experience programming
          from working on many personal projects including making 7 online
          games, each within 48 hours for a competition, and further developing
          one of these games into a mobile application.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          My main interests range from anything which involves complex logical
          thinking to going tramping and playing classical piano and violin.
        </Typography>
      </Grid>
    </>
  );
};

export default AboutMePage;
