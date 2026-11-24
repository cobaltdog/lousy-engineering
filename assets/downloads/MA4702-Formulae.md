# MA4702 - Formulae

> MA4702 · AIRCRAFT STRUCTURES 2 — exported from Lousy Engineering

---

## Finite Element Method

### Total Potential Energy

| Displacement | Strain | Stress |
| --- | --- | --- |
| $u=Nq$ | $\varepsilon=Bq$ | $\sigma=DBq=EBq$ |

Strain energy in an element,  
$U_e=\frac12q^Tk^eq$  

Element stiffness matrix,  
$ k^e =\int_e\  B^TDB\ dV_e$  

Nodal force vector due to body force $f$ and surface traction $T$,  
$f^e =\int_e\ (N^Tf)\ {dV_e} +\int_e\ (N^TT)\ {dS_e}$  
*1st term represents the force vector for body force.  
2nd term represents the force vector for traction load.*  

Finite element system,  
$F=KQ$  

### 2-Node Bar Element

Strain matrix,  
$B =\frac1{l_e} \begin{bmatrix} -1&1 \end{bmatrix}$  

Element stiffness matrix,  
$ k^e =\frac{A_eE_e}{l_e} \begin{bmatrix} 1&-1\\-1&1 \end{bmatrix}$  

Nodal force vector due to body force $f$ and surface traction $T$,  
$f^e =\frac{A_el_ef}{2} \begin{bmatrix}1\\1\end{bmatrix} +\frac{l_eT}{2} \begin{bmatrix}1\\1\end{bmatrix}$  

Nodal force vector due to temperature,  
${f_\theta}^e ={A_eE\alpha\Delta T} \begin{bmatrix} -1\\1 \end{bmatrix}$  

Stress with temperature effect,  
$\sigma =E(\varepsilon-\varepsilon_0) =E(Bq-\alpha\Delta T)$  

### 3-Node Bar Element

Strain matrix,  
$B=\frac2{l_e} \begin{bmatrix} -\frac{1-2\zeta}2& \frac{1+2\zeta}2&-2\zeta \end{bmatrix}$  

Element stiffness matrix,  
$k^e =\frac{A_eE_e}{3l_e} \begin{bmatrix} 7&1&-8\\ 1&7&-8\\ -8&-8&16 \end{bmatrix}$  

Nodal force vector due to body force $f$ and traction load $T$,  
$f^e=A_el_ef \begin{bmatrix} 1/6\\1/6\\2/3 \end{bmatrix} +l_eT \begin{bmatrix} 1/6\\1/6\\2/3 \end{bmatrix}$  

Nodal force vector due to temperature,  
${f_\theta}^e =A_eE\alpha\Delta T \begin{bmatrix} -1\\1\\0 \end{bmatrix}$  

### Plane Truss Element

Strain matrix,  
$B=\frac1{l_e} \begin{bmatrix} -l&-m&l&m \end{bmatrix}$  
*where *$l=cos\theta$* and *$m=sin\theta$  

Element stiffness matrix,  
$k^e =\frac{A_eE_e}{l_e} \begin{bmatrix} l^2&lm&-l^2&-lm\\ lm&m^2&-lm&-m^2\\ -l^2&-lm&l^2&lm\\ -lm&-m^2&lm&m^2 \end{bmatrix}$  

Nodal force vector due to body force $f$ and surface traction $T$,  
$f^e =\frac{A_el_ef}{2} \begin{bmatrix} l\\m\\l\\m \end{bmatrix} +\frac{l_eT}{2} \begin{bmatrix} l\\m\\l\\m \end{bmatrix}$  

Nodal force vector due to temperature,  
${f_\theta}^e =A_eE_e\alpha\Delta T \begin{bmatrix} -l\\-m\\l\\m \end{bmatrix}$  

### Beam Element

Displacement field,  
$w(\zeta) =H_1q_1 +\frac{l_e}{2}H_2q_2 +H_3q_3 +\frac{l_e}{2}H_4q_4$  

Hermite (cubic) shape functions,  
$H_1=\frac14(1-\zeta)^2(2+\zeta)$  
$H_2=\frac14(1-\zeta)^2(1+\zeta)$  
$H_3=\frac14(1+\zeta)^2(2-\zeta)$  
$H_4=\frac14(1+\zeta)^2(\zeta-1)$  
*where leftmost point *$\zeta=-1$*, center point *$\zeta=0$*, rightmost point *$\zeta=1$  

Element stiffness matrix,  
$k^e=\frac{EI}{{l_e}^3} \begin{bmatrix} 12&6l&-12&6l\\ 6l&4l^2&-6l&2l^2\\ -12&-6l&12&-6l\\ 6l&2l^2&-6l&4l^2 \end{bmatrix}$  
*where *$l$* is the length of that beam element*  

Nodal load vector for a uniformly distributed load $P$,  
$f^e=\begin{bmatrix} \frac{Pl_e}{2}& \frac{P{l_e}^2}{12}& \frac{Pl_e}{2}& -\frac{P{l_e}^2}{12} \end{bmatrix}^T$  
*Note that *$P$* is positive for an upward acting distributed load and vice versa.*  

### Constant Strain Triangular (CST) Element

Shape functions,  
$N_1=\zeta$  
$N_2=\eta$  
$N_3=1-\zeta-\eta$  
*Note that *$N_1+N_2+N_3=1$*.*  

Displacement field,  
$u =N_1q_1+N_2q_3+N_3q_5 =(q_1-q_5)\zeta +(q_3-q_5)\eta +q_5$ *(*$x$*-direction)*  
$v =N_1q_2+N_2q_4+N_3q_6 =(q_2-q_6)\zeta +(q_4-q_6)\eta +q_6$ *(*$y$*-direction)*  

Coordinate transformation,  
$x =N_1x_1+N_2x_2+N_3x_3 =(x_1-x_3)\zeta +(x_2-x_3)\eta +x_3$  
$y =N_1y_1+N_2y_2+N_3y_3 =(y_1-y_3)\zeta +(y_2-y_3)\eta +y_3$  
*where *$x_{ij}=x_i-x_j$* and vice versa*  

Jacobian matrix,  
$\begin{bmatrix}J\end{bmatrix} =\begin{bmatrix} \frac{\partial x}{\partial\zeta}& \frac{\partial y}{\partial\zeta}\\ \frac{\partial x}{\partial\eta}& \frac{\partial y}{\partial\eta} \end{bmatrix} =\begin{bmatrix} x_{13}&y_{13}\\ x_{23}&y_{23} \end{bmatrix}$  

Determinant of Jacobian matrix,  
$det|J| =x_{13}y_{23} -x_{23}y_{13}$  

Strain matrix,  
$B =\frac1{det|J|} \begin{bmatrix} y_{23}&0&y_{31}&0&y_{12}&0\\ 0&x_{32}&0&x_{13}&0&x_{21}\\ x_{32}&y_{23}&x_{13}& y_{31}&x_{21}&y_{12} \end{bmatrix}$  

Element stiffness matrix,  
$k^e=t_eA_eB^TDB$  
*Note that element thickness *$t_e$* is assumed to be constant.*  

Nodal force vector due to body force,  
$f^e =\frac{t_eA_e}{3} \begin{bmatrix} f_x&f_y&f_x&f_y&f_x&f_y \end{bmatrix}^T$  

Nodal force vector due to surface traction,  
$f^e =\frac{t_el_{12}}{6} \begin{Bmatrix} 2T_{x,1}+T_{x,2}\\ 2T_{y,1}+T_{y,2}\\ T_{x,1}+2T_{x,2}\\ T_{y,1}+2T_{y,2} \end{Bmatrix}$  
*where the subscript represents the respective forces at a local node,   
the term *$T_{x,1}$* represents the force in the *$x$*-direction at local node 1*  

### Isoparametric 4-Node Quadrilateral Element

Displacement field,  
$u=N_1q_1+N_2q_3+N_3q_5+N_4q_7$  
$v=N_1q_2+N_2q_4+N_3q_6+N_4q_8$  

Coordinate transformation,  
$x=N_1x_1+N_2x_2+N_3x_3+N_4x_4$  
$y=N_1y_1+N_2y_2+N_3y_3+N_4y_4$  

Interpolating shape functions,  
$N_1=\frac14(1-\zeta)(1-\eta)$  
$N_2=\frac14(1+\zeta)(1-\eta)$  
$N_3=\frac14(1+\zeta)(1+\eta)$  
$N_4=\frac14(1-\zeta)(1+\eta)$  

Jacobian matrix,  
$[J] =\begin{bmatrix} \frac{\partial x}{\partial\zeta}& \frac{\partial y}{\partial\zeta}\\ \frac{\partial x}{\partial\eta}& \frac{\partial y}{\partial\eta} \end{bmatrix} =\begin{bmatrix} J_{11}&J_{12}\\ J_{21}&J_{22} \end{bmatrix}$  

Determinant of Jacobian matrix,  
$det|J| =J_{11}J_{22} -J_{12}J_{21}$  

Expressions for $J$,  
$J_{11} =\frac14\Big[ -(1-\eta)x_1 +(1-\eta)x_2 +(1+\eta)x_3 -(1+\eta)x_4 \Big]$  
$J_{12} =\frac14\Big[ -(1-\eta)y_1 +(1-\eta)y_2 +(1+\eta)y_3 -(1+\eta)y_4 \Big]$  
$J_{21} =\frac14\Big[ -(1-\zeta)x_1 -(1+\zeta)x_2 +(1+\zeta)x_3 +(1-\zeta)x_4 \Big]$  
$J_{22} =\frac14\Big[ -(1-\zeta)y_1 -(1+\zeta)y_2 +(1+\zeta)y_3 +(1-\zeta)y_4 \Big]$  

Element stiffness matrix,  
$k^e =t_e\int^1_{-1}\int^1_{-1}\  (B^TDB)\cdot det|J| \ d\zeta d\eta$  

Nodal force vector due to body force,  
$f^e=t_e\Big[ \int^1_{-1}\int^1_{-1}\  N^T\cdot det|J|\ d\zeta d\eta\Big] \begin{Bmatrix} f_x\\f_y \end{Bmatrix}$  

Nodal force vector due to surface traction,  
$f^e=\int_{edge}\ (N^TT)t_e\ {dl}$  

## 1-DOF System

### Vibration Modelling

Moment of inertia for beams,  
$I_{rect} =\frac{bh^3}{12}$ *(Rectangular section)*  
$I_{cyl} =\frac{\pi({d_2}^4-{d_1}^4)}{64}$ *(Cylindrical section)*  
Polar moment of inertia for shafts,  
$I_P =\frac{\pi r^4}{2}$ *(Solid shaft)*  
$I_P =\frac{\pi({d_2}^4-{d_1}^4)}{32}$ *(Hollow shaft)*  

**Stiffness of Springs**  
Springs in parallel,  
$k_{eq} =k_1+k_2+\dots+k_n$  
*Spring elements are considered to be in parallel when they experience the same displacement.*  
Springs in series,  
$\frac1{k_{eq}} =\frac1{k_1} +\frac1{k_2} +\dots +\frac1{k_n}$  

Vertical stiffness of an inclined spring,  
$k_y =\frac{F_y}{\delta_y} =\frac{F_scos\theta} {\delta_s/cos\theta} =k_s(cos\theta)^2$  
*where *$\theta$* is the angle w.r.t. vertical axis*  
Horizontal stiffness of an inclined spring,  
$k_x =\frac{F_x}{\delta_x} =\frac{F_ssin\theta} {\delta_stan\theta} =k_scos\theta$  
*where *$\theta$* is the angle w.r.t. vertical axis*  

**Stiffness of Structural Members**  
Cantilever beam stiffness,  
$k =\frac{F}{\delta} =\frac{3EI}{L^3}$  

Simply supported beam stiffness,  
$k =\frac{48EI}{L^3}$  
*Mass located at center of beam.*  
Simply supported beam stiffness,  
$k =\frac{3EIL}{a^2(L-a)^2}$  
*Mass not located at center of beam.*  

Shaft torsional stiffness,  
$k_t =\frac{T}{\theta} =\frac{GI_P}{L}$ *(Nm/rad)*  
Cable axial stiffness,  
$k_a =\frac{F}{\delta} =\frac{EA}{L}$  

### Free Vibration 1-DOF

Natural frequency,  
$\omega_n=\sqrt{\frac{k}{m}}$  

Damping ratio.  
$\zeta =\frac{c}{c_{cr}} =\frac{c}{2\sqrt{km}} =\frac{c}{2m\omega_n} =\frac{c}{2k/\omega_n}$  

Critical damping constant of a system,  
$c_{cr} =2\sqrt{km} =2m\omega_n =\frac{2k}{\omega_n}$  
*S.I. unit of newton-second per meter.*  

---

#### Undamped System (Mass-Spring)

Free vibration response of the system,  
$x(t) =Acos(\omega_nt) +Bsin(\omega_nt)$  
$x(t) =x_0cos(\omega_nt) +\frac{\dot x_0}{\omega_n} sin(\omega_nt)$  
$x(t) =Xsin(\omega_nt+\phi)$  
*where *$X=\sqrt{A^2+B^2}$* and *$\phi ={tan^{-1}}\frac{A}{B}+\pi$*,  
(add *$\pi$* if denominator of arctan is less than zero)*  

---

#### Damped System (Mass-Spring-Damper)

**Underdamped System **$\zeta<1$  
Damped frequency of the system,  
$\omega_d=\omega_n\sqrt{1-\zeta^2}$  

Coefficient A,  
$A=x_0$  
Coefficient B,  
$B =\frac{\dot x_0+\zeta\omega_nx_0} {\omega_n\sqrt{1-\zeta^2}}$  

Free vibration response of the system,  
$x(t) =e^{-\zeta\omega_nt} (Acos\omega_dt+Bsin\omega_d t)$  
$x(t) =Xe^{-\zeta\omega_nt} sin(\omega_d+\phi)$  
*where *$X=\sqrt{A^2+B^2}$* and *$\phi=tan^{-1}\frac{A}{B}$  

**Critically Damped **$\zeta=1$  
Free vibration response of the system,  
$x(t)=e^{-\omega_nt}(C_1+C_2t)$  
$x(t) =e^{-\omega_nt}\big[x_0 +(\dot x_0+\omega_nx_0)t\big]$  

**Overdamped System **$\zeta>1$  
Coefficient $C_1$,  
$C_1 =\frac{\dot x_0+x_0\omega_n (\zeta+\sqrt{\zeta^2-1})} {2\omega_n\sqrt{\zeta^2-1}}$  
Coefficient $C_2$,  
$ C_2 =\frac{-\dot x_0-x_0\omega_n (\zeta-\sqrt{\zeta^2-1})} {2\omega_n\sqrt{\zeta^2-1}}$  

Free vibration response of the system,  
$x(t) =C_1e^{\big\{-\zeta+\sqrt{ \zeta^2-1}\ \big\}\omega_nt} +C_2e^{\big\{-\zeta-\sqrt{ \zeta^2-1}\ \big\}\omega_nt}$  

### Forced Vibration 1-DOF

#### Harmonic Force Vibration

**Undamped System (Mass-Spring)**  
Vibration response of system,  
$x(t)=x_h(t)+x_p(t)$  
*where *$x_h(t)\equiv\ $*free response,   
and *$x_p(t)\equiv\ $*forced response*  

Vibration response of system,  
$x(t) =Acos(\omega_nt) +Bsin(\omega_nt) +\begin{cases} Xcos(\omega t)& \text{if}\ \  F(t)=F_0cos(\omega t)\\ Xsin(\omega t)& \text{if}\ \  F(t)=F_0sin(\omega t) \end{cases}$  
$x(t) =X_1sin(\omega_nt+\phi) +\begin{cases} Xcos(\omega t)& \text{if}\ \  F(t)=F_0cos(\omega t)\\ Xsin(\omega t)& \text{if}\ \  F(t)=F_0sin(\omega t) \end{cases}$  
*where *$X_1=\sqrt{A^2+B^2}$* and *$\phi ={tan^{-1}}\frac{A}{B}+\pi$*,  
(add *$\pi$* if denominator of arctan is less than zero)*  

Coefficient of forced response,  
$X=\frac{F_0}{k-m\omega^2}$  
*Applies to both types of excitation.*  

Coefficients of free response (cosine),  
$A=x_0-X$  
$B=\frac{\dot x}{\omega_n}$  
Coefficients of free response (sine),  
$A=x_0$  
$B =\frac{\dot x_0-X\omega}{\omega_n}$  

**Damped System (Mass-Spring-Damper)**  
Vibration response of system,  
$x(t)=x_h(t)+x_p(t)$  
*where *$x_h(t)\equiv\ $*free response,   
and *$x_p(t)\equiv\ $*forced response*  

Forced vibration response of system,  
$x_p(t) =\begin{cases} Xcos(\omega t-\phi)& \text{if}\ \  F(t)=F_0cos(\omega t)\\ Xsin(\omega t-\phi)& \text{if}\ \  F(t)=F_0sin(\omega t) \end{cases}$  

Coefficient of vibration response,  
$X=\frac{F_0}{m}\frac1 {\sqrt{({\omega_n}^2-\omega^2)^2 +4\zeta^2\omega^2{\omega_n}^2}}$  
$X=\frac{F_0}{k} \frac1{\sqrt{(1-r^2)^2+(2\zeta r)^2}}$  
Phase difference of vibration response,  
$\phi =tan^{-1}\Big( \frac{2\zeta\omega\omega_n} {{\omega_n}^2-\omega^2}\Big)$  
$\phi=tan^{-1}\Big( \frac{2\zeta r}{1-r^2}\Big)$  

Frequency ratio,  
$r=\frac{\omega}{\omega_n}$  
Magnification factor,  
$M=\frac{X}{X_0}$  

---

#### Harmonic Base Excitation

Equivalent force,  
$F_{eq}(t) =F_0sin(\omega t+\alpha)$  
*where *$F_0=Y\sqrt{k^2+(c\omega)^2}$*  
and *$tan\alpha=\frac{c\omega}{k}$* for sinusoidal  
and *$tan\alpha=\frac{k}{-c\omega}$* for cosine*  

Vibration response of the system,  
$x(t)=Xsin(\omega t+\alpha-\phi)$  

Coefficient of vibration response,  
$X=\frac{F_0}{k} \frac1{\sqrt{(1-r^2)^2+(2\zeta r)^2}}$  
$X =\frac{Y\sqrt{1+(2\zeta r)^2}} {\sqrt{(1-r^2)^2+(2\zeta r)^2}}$  
Phase difference of vibration response,  
$\phi=tan^{-1}\Big( \frac{2\zeta r}{1-r^2}\Big)$  

Displacement transmissibility,  
$T_d =\frac{X}{Y} =\frac{\sqrt{1+(2\zeta r)^2}} {\sqrt{(1-r^2)^2+(2\zeta r)^2}}$  
*where *$X\equiv\ $*induced vibration (output),   
and *$Y\equiv\ $*base excitation (input)*  

## 2-DOF System

### Free Vibration 2-DOF

Equations of motion,  
$\begin{bmatrix} m&0\\0&m \end{bmatrix} \begin{Bmatrix} \ddot x_1\\\ddot x_2 \end{Bmatrix} +\begin{bmatrix} 2k&-k\\-k&2k \end{bmatrix} \begin{Bmatrix} x_1\\x_2 \end{Bmatrix} =\begin{Bmatrix} 0\\0 \end{Bmatrix}$  
$\begin{bmatrix}M\end{bmatrix} \begin{Bmatrix}\ddot X\end{Bmatrix} +\begin{bmatrix}K\end{bmatrix} \begin{Bmatrix}X\end{Bmatrix} =\begin{Bmatrix}0\end{Bmatrix}$  
*1st matrix represents the mass matrix.  
2nd matrix represents the stiffness matrix.*  

Assume free vibration response to be,  
$x_1=A_1sin(\omega t) \ \ \ \ \  \rightarrow \ \ \ \ \  \ddot x_1=-\omega^2A_1sin(\omega t)$  
$x_2=A_2sin(\omega t) \ \ \ \ \  \rightarrow \ \ \ \ \  \ddot x_2=-\omega^2A_2sin(\omega t)$  
*For a given problem, *$A_1$*, *$A_2$*, and *$\omega$* are to be determined.*  

Equations of motion becomes,  
$\begin{bmatrix} 2k-\omega^2m&-k\\ -k&{2k-\omega^2m} \end{bmatrix} \begin{Bmatrix} A_1\\A_2 \end{Bmatrix} =\begin{Bmatrix} 0\\0 \end{Bmatrix}$  

Natural frequency and mode shapes:  
- Equate determinant of matrix to zero and solve for natural frequencies
- Substitute natural frequencies into equations of motion
- Let $A_1=1$ or $A_2=1$ to obtain the mode shapes

Vibration response of each mode shape,  
$\begin{Bmatrix} x_1\\x_2 \end{Bmatrix}_1 =C_1\phi_1sin(\omega_1t+\alpha_1)$  
$\begin{Bmatrix} x_1\\x_2 \end{Bmatrix}_2 =C_2\phi_2sin(\omega_2t+\alpha_2)$  
*Unknowns *$C_1$*, *$C_2$*, *$\alpha_1$*, and *$\alpha_2$* are to be   
determined from given initial conditions.*  

Total vibration response,  
$\begin{Bmatrix} \bold x \end{Bmatrix} =\begin{Bmatrix} \bold x \end{Bmatrix}_1 +\begin{Bmatrix} \bold x \end{Bmatrix}_2$  
$\begin{Bmatrix} x_1\\x_2 \end{Bmatrix} =C_1\phi_1sin(\omega_1t+\alpha_1) +C_2\phi_2sin(\omega_2t+\alpha_2)$  
$\begin{Bmatrix} \dot x_1\\\dot x_2 \end{Bmatrix} =C_1\omega_1\phi_1 cos(\omega_1t+\alpha_1) +C_2\omega_2\phi_2 cos(\omega_2t+\alpha_2)$  

### Forced Vibration 2-DOF

Equations of motion,  
$\begin{bmatrix} m_1&0\\0&m_2 \end{bmatrix} \begin{Bmatrix} \ddot x_1\\\ddot x_2 \end{Bmatrix} +\begin{bmatrix} k_1+k_2& -k_2\\ -k_2&k_2+k_3 \end{bmatrix} \begin{Bmatrix} x_1\\x_2 \end{Bmatrix} =\begin{Bmatrix} F_1sin(\omega t)\\ F_2sin(\omega t) \end{Bmatrix}$  
$\begin{bmatrix}M\end{bmatrix} \begin{Bmatrix}\ddot X\end{Bmatrix} +\begin{bmatrix}K\end{bmatrix} \begin{Bmatrix}X\end{Bmatrix} =\begin{Bmatrix}0\end{Bmatrix}$  
*1st matrix represents the mass matrix.  
2nd matrix represents the stiffness matrix.*  

If forced vibration is $F_isin(\omega t)$, vibration response is,  
$x_1=X_1sin(\omega t) \ \ \ \rightarrow\ \ \  \ddot x_1 =-\omega^2X_1sin(\omega t)$  
$x_2=X_2sin(\omega t) \ \ \ \rightarrow\ \ \  \ddot x_2 =-\omega^2X_2sin(\omega t)$  
*whereby excitation frequency *$\omega$* is known,   
and amplitudes *$X_1$* and *$X_2$* are unknowns*  

Equations of motion becomes,  
$ \begin{bmatrix} k_1+k_2-m_1\omega^2&-k_2\\ -k_2&k_2+k_3-m_2\omega^2 \end{bmatrix} \begin{Bmatrix} X_1\\X_2 \end{Bmatrix} =\begin{Bmatrix} F_1\\F_2 \end{Bmatrix}$  
*Note that if the excitation frequency *$\omega$* is not equal to any of the system’s   
natural frequencies, the determinant of the matrix is not zero, *$det|A|\ne0$*.*  

Cramer’s rule,  
$\Delta_1 =det\begin{vmatrix} F_1&-k_2\\ F_2&k_2+k_3-m_2\omega^2 \end{vmatrix}$  
$\Delta_2 =det\begin{vmatrix} k_1+k_2-m_1\omega^2&F_1\\ -k_2&F_2 \end{vmatrix}$  

Amplitudes of vibration response of each mass,  
$X_1=\frac{\Delta_1}{\Delta}$  
$X_2=\frac{\Delta_2}{\Delta}$  

---

#### Vibration Absorber

Properly tuned absorber,  
$\omega=\sqrt{\frac{k_2}{m_2}}$ *(natural frequency of absorber)*  
$X_1=0$ *(Displacement of machine)*  
$X_2=-\frac{P}{k_2}$ *(Displacement of absorber)*  
