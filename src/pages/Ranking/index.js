import React,{ useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import Navbar from '../Navbar';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
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
    const [pontuacao, setPontuacao] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);



    useEffect(() => {
        const getPontuacao = async () => {
            try {
                const response = await api.get('/ranking');
                setPontuacao(response.data.rows) 
                console.log(response.data.rows)
            } catch (error) {
                console.log(error.response);
                if(error.response.data.error.name==="InvalidJwtToken"){
                  alert("Sua sessão expirou! Faça o login novamente.")

                }else{
                  alert("Erro em carregar os dados")
                }

          }
                
        }
        getPontuacao()
    }, []);

    var count=1;
    return (
        <>
            <Navbar />
            <Container>
                <h2 style={{color:"#6A6A6A", textAlign:"center", fontWeight:600, fontSize:"200%", marginTop:"3%", marginBottom:"3%"}} >Ranking</h2>
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Colocação</StyledTableCell>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">Pontuação</StyledTableCell>
            

         
            
          </TableRow>
        </TableHead>
        <TableBody>
          {pontuacao.map((infopontuacao) => (
            <StyledTableRow key={infopontuacao.id}>
              <StyledTableCell component="th" scope="row">
                {count++} º
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {infopontuacao.nome}
              </StyledTableCell>
              <StyledTableCell align="right">{infopontuacao.pontos}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
       {/*  <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter> */}
      </Table>
    </TableContainer>
            </Container>
        </>
    )
}

export default Ranking;




