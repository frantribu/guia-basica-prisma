"use client";
import { UserContext } from "@/context/UserContext";    
import Link from "next/link";
import { useContext } from "react";

export default function Page() {
    const { user } = useContext(UserContext);   

    return(
        <section className="perfil bg-white">

<div className="flow-root">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Nombre</dt>
      <dd className="text-gray-700 sm:col-span-2">{user.nombre}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Edad</dt>
      <dd className="text-gray-700 sm:col-span-2">{user.edad}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Email</dt>
      <dd className="text-gray-700 sm:col-span-2">{user.email}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Contraseña</dt>
      <dd className="text-gray-700 sm:col-span-2">{user.password }</dd>
    </div>
  </dl>
</div>

            <Link href="/auth/registrarse">Volver</Link>
        </section>
    );
}