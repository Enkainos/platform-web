import {Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <Segment raised>
      <Grid columns={3}>
        <GridRow>
          <GridColumn width={6} floated="left" verticalAlign="middle">
            <NavLink to="/"><span>Enkainos</span></NavLink>
          </GridColumn>
          <GridColumn width={4} floated="right" verticalAlign="middle">
            <Grid divided columns={3}>
              <GridRow align="center">
                <GridColumn><NavLink to="/">Platform</NavLink></GridColumn>
                <GridColumn><NavLink to="/plans">Plans</NavLink></GridColumn>
              </GridRow>
            </Grid>
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export {Header};
