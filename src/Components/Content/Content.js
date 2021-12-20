import React, {useContext} from 'react';
import './Content.css'
import {ThemeContext} from '../Context/ThemeContext'

export default function Content() {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={theme ? "content light" : "content dark"}>
            <h1>Contenu test</h1>
            Excepteur veniam id ea do sint magna incididunt voluptate fugiat. Deserunt enim eiusmod fugiat excepteur proident laborum laborum tempor aute amet irure commodo. Nostrud eu veniam ea incididunt. Reprehenderit adipisicing fugiat duis quis veniam non reprehenderit veniam adipisicing ad minim. Amet ullamco Lorem amet culpa incididunt culpa consequat Lorem sunt nostrud adipisicing. Culpa qui ex qui veniam in id fugiat ipsum officia occaecat officia commodo. Duis elit enim duis commodo.

Incididunt ut aute aliqua eu mollit sit elit culpa velit pariatur magna. Est sint et laborum incididunt nulla ullamco deserunt reprehenderit est non nulla ex. Quis incididunt aliquip nisi dolore qui ea. Nisi ad commodo elit est ut quis consequat sint sint eu. Qui excepteur do aliqua est consectetur consectetur Lorem aliquip pariatur.

Cupidatat voluptate do reprehenderit aliqua magna est quis nostrud sint. Anim in amet ut Lorem ullamco sint laborum et nostrud ullamco incididunt. Consectetur et Lorem minim excepteur elit. Mollit cupidatat laboris incididunt dolor irure ex consequat in id nulla deserunt tempor. Esse in ea culpa dolore dolore anim ullamco culpa nulla deserunt. Dolore consequat pariatur laboris Lorem quis aliquip aliqua amet id consectetur. Sit deserunt eu duis cupidatat irure id cillum aute.

Nulla elit officia culpa laboris est non tempor incididunt. Duis est sit fugiat laborum est eu nulla ipsum laborum sunt adipisicing ea. Quis aliquip est adipisicing occaecat culpa reprehenderit. Nulla officia deserunt proident sint cupidatat anim.

Veniam nisi laborum amet duis sint incididunt cillum. Anim esse ad ex minim enim aliqua esse ad. Id irure est sit ullamco dolore do enim tempor. Incididunt minim ea adipisicing aliquip sunt minim reprehenderit reprehenderit consectetur eu. Pariatur sit qui do cillum elit proident. Sit dolor aliquip ex in nulla quis laboris. Voluptate sint in reprehenderit eu occaecat.

Occaecat excepteur sunt irure excepteur. Id voluptate cillum nisi velit irure anim. Consequat consectetur officia elit ullamco duis amet irure aliqua ipsum esse amet eu officia elit. Aliquip pariatur Lorem dolor esse aliqua eu tempor sint Lorem. Ut ex aute velit exercitation cupidatat incididunt. Adipisicing sunt sint do proident nostrud incididunt ad occaecat qui laborum sunt consequat. Voluptate elit esse elit minim nostrud enim et.

Incididunt cupidatat dolor ex adipisicing ex aute. Do nostrud quis dolor eiusmod deserunt mollit velit est pariatur consectetur. Ex aute sunt adipisicing consectetur esse minim deserunt eu. Sint mollit irure pariatur consequat commodo laborum cupidatat eu non pariatur minim consequat qui.

Adipisicing laboris cillum pariatur sint ea non culpa esse ea aute non nulla minim. Dolor voluptate ut ad reprehenderit aute consectetur id esse deserunt nulla eiusmod in. Nulla incididunt incididunt eiusmod deserunt duis consectetur. Sunt in in eu ipsum velit do consequat magna voluptate laborum elit veniam. Esse sint elit adipisicing magna proident duis sint in mollit consequat.

Id dolore ullamco sint officia dolor aliqua. Dolor proident irure sunt excepteur ex qui occaecat esse anim reprehenderit laboris. Exercitation enim in minim ad et anim laborum eiusmod. Exercitation nostrud tempor amet nostrud sit sunt. Velit id dolor id fugiat quis anim et amet in irure amet adipisicing duis. Do ut reprehenderit aliquip elit Lorem ea in.

Consectetur reprehenderit esse labore velit consequat. Elit eiusmod deserunt sunt duis incididunt magna anim voluptate non aliquip anim labore non. Culpa laboris commodo occaecat reprehenderit eu quis qui mollit. Velit cupidatat non aliqua aliqua enim ex aliquip dolore esse non. Ea reprehenderit deserunt minim quis labore reprehenderit pariatur ea ullamco consectetur. Qui veniam sint voluptate laborum eiusmod enim nisi eu deserunt sit minim cupidatat adipisicing dolor. Esse ut in amet ea cupidatat sunt.
        </div>
    )
}
