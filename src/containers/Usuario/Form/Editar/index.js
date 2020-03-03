import React from 'react';

import {
    Form,
    FormGroup,
    Col,
} from 'react-bootstrap';


import { Formik } from 'formik';
import * as Yup from 'yup';

import CampoNome from '../../Fields/CampoNome'
import CampoEmail from '../../Fields/CampoEmail'
import CampoSenha from '../../Fields/CampoSenha'
import CampoConfirmacaoSenha from '../../Fields/CampoConfirmacaoSenha'
import CampoCrm from '../../Fields/CampoCrm'
import CampoEspecialidade from '../../Fields/CampoEspecialidade'
import CamposMedicoAdmin from '../../Fields/CamposMedicoAdmin'
import BtnReset from '../../../../components/form/BtnReset'
import BtnSubmit from '../../../../components/form/btnSubmit'
import ClinicClient from '../../../../services/Clinic/ClinicClient';

function index() {
    return (
        <div />
    );
}

export default index;