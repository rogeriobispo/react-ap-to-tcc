import React from 'react';
import {
    Table,
    Button
} from 'react-bootstrap';



function Agenda(props) {
    const { buttonState, handleClick, list } = props

    return (
        <Table responsive>
            <thead>
                <tr>

                    <th>Segunda</th>
                    <th>Terça</th>
                    <th>Quarta</th>
                    <th>Quinta</th>
                    <th>Sexta</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Button disabled={list ? !buttonState[0].isActive : false} key={0} bsStyle={buttonState[0].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 0)}>08:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[20].isActive : false} key={20} bsStyle={buttonState[20].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 20)}>08:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[40].isActive : false} key={40} bsStyle={buttonState[40].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 40)}>08:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[60].isActive : false} key={60} bsStyle={buttonState[60].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 60)}>08:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[80].isActive : false} key={80} bsStyle={buttonState[80].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 80)}>08:00</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[1].isActive : false} key={1} bsStyle={buttonState[1].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 1)}>08:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[21].isActive : false} key={21} bsStyle={buttonState[21].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 21)}>08:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[41].isActive : false} key={41} bsStyle={buttonState[41].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 41)}>08:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[61].isActive : false} key={61} bsStyle={buttonState[61].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 61)}>08:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[81].isActive : false} key={81} bsStyle={buttonState[81].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 81)}>08:30</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[2].isActive : false} key={2} bsStyle={buttonState[2].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 2)}>09:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[22].isActive : false} key={22} bsStyle={buttonState[22].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 22)}>09:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[42].isActive : false} key={42} bsStyle={buttonState[42].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 42)}>09:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[62].isActive : false} key={62} bsStyle={buttonState[62].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 62)}>09:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[82].isActive : false} key={82} bsStyle={buttonState[82].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 82)}>09:00</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[3].isActive : false} key={3} bsStyle={buttonState[3].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 3)}>09:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[23].isActive : false} key={23} bsStyle={buttonState[23].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 23)}>09:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[43].isActive : false} key={43} bsStyle={buttonState[43].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 43)}>09:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[63].isActive : false} key={63} bsStyle={buttonState[63].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 63)}>09:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[83].isActive : false} key={83} bsStyle={buttonState[83].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 83)}>09:30</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[4].isActive : false} key={4} bsStyle={buttonState[4].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 4)}>10:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[24].isActive : false} key={24} bsStyle={buttonState[24].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 24)}>10:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[44].isActive : false} key={44} bsStyle={buttonState[44].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 44)}>10:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[64].isActive : false} key={64} bsStyle={buttonState[64].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 64)}>10:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[84].isActive : false} key={84} bsStyle={buttonState[84].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 84)}>10:00</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[5].isActive : false} key={5} bsStyle={buttonState[5].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 5)}>10:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[25].isActive : false} key={25} bsStyle={buttonState[25].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 25)}>10:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[45].isActive : false} key={45} bsStyle={buttonState[45].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 45)}>10:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[65].isActive : false} key={65} bsStyle={buttonState[65].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 65)}>10:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[85].isActive : false} key={85} bsStyle={buttonState[85].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 85)}>10:30</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[6].isActive : false} key={6} bsStyle={buttonState[6].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 6)}>11:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[26].isActive : false} key={26} bsStyle={buttonState[26].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 26)}>11:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[46].isActive : false} key={46} bsStyle={buttonState[46].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 46)}>11:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[66].isActive : false} key={66} bsStyle={buttonState[66].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 66)}>11:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[86].isActive : false} key={86} bsStyle={buttonState[86].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 86)}>11:00</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[7].isActive : false} key={7} bsStyle={buttonState[7].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 7)}>11:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[27].isActive : false} key={27} bsStyle={buttonState[27].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 27)}>11:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[47].isActive : false} key={47} bsStyle={buttonState[47].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 47)}>11:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[67].isActive : false} key={67} bsStyle={buttonState[67].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 67)}>11:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[87].isActive : false} key={87} bsStyle={buttonState[87].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 87)}>11:30</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[8].isActive : false} key={8} bsStyle={buttonState[8].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 8)}>12:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[28].isActive : false} key={28} bsStyle={buttonState[28].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 28)}>12:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[48].isActive : false} key={48} bsStyle={buttonState[48].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 48)}>12:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[68].isActive : false} key={68} bsStyle={buttonState[68].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 68)}>12:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[88].isActive : false} key={88} bsStyle={buttonState[88].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 88)}>12:00</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[9].isActive : false} key={9} bsStyle={buttonState[9].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 9)}>12:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[29].isActive : false} key={29} bsStyle={buttonState[29].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 29)}>12:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[49].isActive : false} key={49} bsStyle={buttonState[49].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 49)}>12:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[69].isActive : false} key={69} bsStyle={buttonState[69].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 69)}>12:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[89].isActive : false} key={89} bsStyle={buttonState[89].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 89)}>12:30</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[10].isActive : false} key={10} bsStyle={buttonState[10].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 10)}>13:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[30].isActive : false} key={30} bsStyle={buttonState[30].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 30)}>13:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[50].isActive : false} key={50} bsStyle={buttonState[50].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 50)}>13:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[70].isActive : false} key={70} bsStyle={buttonState[70].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 70)}>13:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[90].isActive : false} key={90} bsStyle={buttonState[90].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 90)}>13:00</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[11].isActive : false} key={11} bsStyle={buttonState[11].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 11)}>13:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[31].isActive : false} key={31} bsStyle={buttonState[31].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 31)}>13:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[51].isActive : false} key={51} bsStyle={buttonState[51].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 51)}>13:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[71].isActive : false} key={71} bsStyle={buttonState[71].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 71)}>13:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[91].isActive : false} key={91} bsStyle={buttonState[91].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 91)}>13:30</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[12].isActive : false} key={12} bsStyle={buttonState[12].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 12)}>14:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[32].isActive : false} key={32} bsStyle={buttonState[32].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 32)}>14:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[52].isActive : false} key={52} bsStyle={buttonState[52].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 52)}>14:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[72].isActive : false} key={72} bsStyle={buttonState[72].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 72)}>14:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[92].isActive : false} key={92} bsStyle={buttonState[92].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 92)}>14:00</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[13].isActive : false} key={13} bsStyle={buttonState[13].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 13)}>14:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[33].isActive : false} key={33} bsStyle={buttonState[33].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 33)}>14:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[53].isActive : false} key={53} bsStyle={buttonState[53].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 53)}>14:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[73].isActive : false} key={73} bsStyle={buttonState[73].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 73)}>14:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[93].isActive : false} key={93} bsStyle={buttonState[93].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 93)}>14:30</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[14].isActive : false} key={14} bsStyle={buttonState[14].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 14)}>15:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[34].isActive : false} key={34} bsStyle={buttonState[34].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 34)}>15:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[54].isActive : false} key={54} bsStyle={buttonState[54].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 54)}>15:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[74].isActive : false} key={74} bsStyle={buttonState[74].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 74)}>15:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[94].isActive : false} key={94} bsStyle={buttonState[94].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 94)}>15:00</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[15].isActive : false} key={15} bsStyle={buttonState[15].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 15)}>15:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[35].isActive : false} key={35} bsStyle={buttonState[35].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 35)}>15:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[55].isActive : false} key={55} bsStyle={buttonState[55].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 55)}>15:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[75].isActive : false} key={75} bsStyle={buttonState[75].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 75)}>15:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[95].isActive : false} key={95} bsStyle={buttonState[95].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 95)}>15:30</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[16].isActive : false} key={16} bsStyle={buttonState[16].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 16)}>16:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[36].isActive : false} key={36} bsStyle={buttonState[36].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 36)}>16:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[56].isActive : false} key={56} bsStyle={buttonState[56].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 56)}>16:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[76].isActive : false} key={76} bsStyle={buttonState[76].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 76)}>16:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[96].isActive : false} key={96} bsStyle={buttonState[96].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 96)}>16:00</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[27].isActive : false} key={17} bsStyle={buttonState[17].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 17)}>16:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[37].isActive : false} key={37} bsStyle={buttonState[37].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 37)}>16:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[57].isActive : false} key={57} bsStyle={buttonState[57].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 57)}>16:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[77].isActive : false} key={77} bsStyle={buttonState[77].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 77)}>16:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[97].isActive : false} key={97} bsStyle={buttonState[97].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 97)}>16:30</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[18].isActive : false} key={18} bsStyle={buttonState[18].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 18)}>17:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[38].isActive : false} key={38} bsStyle={buttonState[38].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 38)}>17:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[58].isActive : false} key={58} bsStyle={buttonState[58].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 58)}>17:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[78].isActive : false} key={78} bsStyle={buttonState[78].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 78)}>17:00</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[98].isActive : false} key={98} bsStyle={buttonState[98].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 98)}>17:00</Button></td>
                    {' '}
                </tr>
                <tr>
                    <td><Button disabled={list ? !buttonState[19].isActive : false} key={19} bsStyle={buttonState[19].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 19)}>17:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[39].isActive : false} key={39} bsStyle={buttonState[39].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 39)}>17:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[59].isActive : false} key={59} bsStyle={buttonState[59].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 59)}>17:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[79].isActive : false} key={79} bsStyle={buttonState[79].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 79)}>17:30</Button></td>
                    {' '}
                    <td><Button disabled={list ? !buttonState[99].isActive : false} key={99} bsStyle={buttonState[99].isActive ? 'primary' : 'default'} onClick={(e) => handleClick(e, 99)}>17:30</Button></td>
                    {' '}
                </tr>


            </tbody>
        </Table>

    );
}

export default Agenda