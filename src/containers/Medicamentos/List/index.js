import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Tabela from '../../../components/Tabelas';
import ClinicClient from '../../../services/Clinic/ClinicClient';
import DetailModal from '../../../components/Modal/Detail';

function MedicineList() {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await ClinicClient.get('/medicines');
            setMedicines(response.data);
        })();
    }, []);


    function editLink(medicineId) {
        return (
            <Link to={`/medicamento/${medicineId}`} className="btn btn-primary active">Editar</Link>
        )
    }

    function userDetail(medicine) {
        return (
            <>
                <div>
                    <h4>
                        Medicamento:
                        {medicine.name}
                    </h4>
                    <hr />
                    <h4>
                        Fabricante:
                        {medicine.factory}
                    </h4>
                </div>
            </>
        );
    }

    function tableHead() {
        return (
            <>
                <th>Nome</th>
                <th>Fabricante</th>
                <th>Criado Em</th>
                <th>Detalhes</th>
            </>
        );
    }

    function tableBody(medicine) {
        return (
            <tr>
                <td>{medicine.name}</td>
                <td>{medicine.factory}</td>
                <td>{format(new Date(medicine.createdAt), 'dd/MM/yyyy')}</td>
                <td>
                    <DetailModal
                        userDetail={userDetail(medicine)}
                        username={medicine.name}
                        link={editLink(medicine.id)}
                        propovalMessage={{
                            msg: 'Detalhe do Medicamento',
                            title: '',
                        }}
                    />
                </td>
            </tr>
        );
    }

    return (
        <>
            <Tabela
                head={tableHead()}
                body={medicines.map(med => tableBody(med))}
            />
        </>
    );
}

export default MedicineList;
