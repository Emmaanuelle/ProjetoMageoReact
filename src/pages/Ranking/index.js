import React,{ useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import Navbar from '../Navbar';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../../services/api';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


function Ranking() {
    const classes = useStyles();
    const [pontuacao, setPontuacao] = useState([])
    useEffect(() => {
        const getPontuacao = async () => {
            try {
                const response = await api.get('/ranking');
                setPontuacao(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error);
                alert("Erro em carregar os dados")
            }
        }
        getPontuacao()
    }, []);

    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{ margin: 20, color: '#948324' }}>Ranking</h2>
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Pontuação</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {pontuacao.map((infopontuacao) => (
            <StyledTableRow key={infopontuacao.id}>
              <StyledTableCell component="th" scope="row">
                {infopontuacao.nome}
              </StyledTableCell>
              <StyledTableCell align="right">{infopontuacao.pontos}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Container>
        </>
    )
}

export default Ranking;




