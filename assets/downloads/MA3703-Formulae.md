# MA3703 - Formulae

> MA3703 · FLIGHT DYNAMICS — exported from Lousy Engineering

---

## Longitudinal Static Stability

Criteria for longitudinal static stability,  
$\frac{dC_m}{d\alpha} \equiv C_{m_{\alpha}} <0$ *(Negative gradient)*  
$\frac{dC_m}{dC_L} \equiv C_{m_{C_L}} <0$ *(Negative gradient)*  
$C_{m_0}>0$ *(Positive *$y$*-intercept)*  
Relations between angle of attack,  
$\alpha_{FRL}=\alpha_w-i_w$  
$\alpha_{abs_w} =\alpha_w-\alpha_{0_w}$  
$\alpha_t =\alpha_{FRL}-\varepsilon+i_t$  

Longitudinal static stability curve,  
$C_m =\frac{dC_m}{d\alpha}\alpha +C_{m_{\alpha=0}}$  
$C_m =\frac{dC_m}{dC_L}C_L +C_{m_{L=0}}$  
image.png  

---

### Contribution of Components

#### Wing Contribution

Coefficient of wing pitch moment,  
$C_{m_w} =C_{m_{ac_w}}+C_{L_w}\Big( \frac{x_{CG}-x_{ac}}{\bar c}\Big)$  
*Note that *$C_{L_w} =C_{L_{0_w}} +C_{L_{\alpha_w}}\alpha_w$*.*  

Coefficient of wing pitch moment,  
$C_{m_w} =C_{m_{0_w}} +C_{m_{\alpha_w}}\alpha_w$  
$C_{m_{0_w}} =C_{m_{ac_w}}+C_{L_{0_w}}\big( \frac{x_{CG}-x_{ac}}{\bar c}\big)$  
$ C_{m_{\alpha_w}} =C_{L_{\alpha_w}}\big( \frac{x_{CG}-x_{ac}}{\bar c}\big)$  
*Linear form of equation*  

#### Horizontal Tail Contribution

Horizontal tail efficiency,  
$\eta_H =\frac{\frac12\rho{V_t}^2} {\frac12\rho{V_w}^2}$  

Horizontal tail volume ratio,  
$V_H =\frac{l_t}{\bar c} \frac{S_t}{S_w}$  
*where *$l_t$* is the distance of tail *$ac$* from the *$CG$  

Coefficient of tail pitch moment,  
$C_{m_t}=-\eta_HV_HC_{L_t}$  

Coefficient of tail pitch moment,  
$C_{m_t} =C_{m_{0_t}} +C_{m_{\alpha_t}}\alpha_w$  
$C_{m_{0_t}} =\eta_HV_HC_{L_{\alpha_t}} (\varepsilon_0+i_w-i_t)$  
$C_{m_{\alpha_t}} =-\eta_HV_HC_{L_{\alpha_t}} \Big(1-\frac{d\varepsilon}{d\alpha}\Big)$  
*where tail lift slope *$C_{L_{\alpha_t}} =\frac{a_0}{1+a_0/(\pi eAR)}$  
Downwash angle equation,  
$\varepsilon =\varepsilon_0 +\frac{d\varepsilon}{d\alpha} \alpha_w$  
*where *$\varepsilon_0$* is downwash angle at *$\alpha_w=0$  

---

### Total Pitching Moment

Coefficient of total pitch moment,  
$C_m =C_{m_w}+C_{m_t}+C_{m_f}$  

Coefficient of total pitch moment,  
$C_m=C_{m_0} +C_{m_{(\alpha_w)}}(\alpha_w)$  
$C_{m_0} =C_{m_{ac_w}}+C_{L_{0_w}}\Big( \frac{x_{CG}-x_{ac}}{\bar c}\Big) +\eta_HV_HC_{L_{\alpha_t}} (\varepsilon_0+i_w-i_t) +C_{m_{0_f}}$  
$C_{m_{(\alpha_w)}} =C_{L_{\alpha_w}}\Big( \frac{x_{CG}-x_{ac}}{\bar c}\Big) -\eta_HV_HC_{L_{\alpha_t}} \Big(1-\frac{d\varepsilon}{d\alpha}\Big) +C_{m_{\alpha_f}}$  
*Equation expressed in terms of wing angle of attack.*  

Coefficient of total pitch moment,  
$C_{m}=C_{m_0}+C_{m_\alpha}\alpha$  
$C_{m_0} =C_{m_{ac_w}} +(C_{L_{0_w}}+C_{L_{\alpha_w}}i_w) \Big( \frac{x_{CG}-x_{ac}}{\bar c}\Big) \\ \ \ \ \ \ \ \ \ \ \ \ \  +\eta_HV_HC_{L_{\alpha_t}} \Big(\varepsilon_0 +\frac{d\varepsilon}{d\alpha} i_w-i_t\Big) +C_{m_{0_f}}+C_{m_{\alpha_f}}i_w$  
$C_{m_{\alpha}} =C_{L_{\alpha_w}}\Big( \frac{x_{CG}-x_{ac}}{\bar c}\Big) -\eta_HV_HC_{L_{\alpha_t}} \Big(1-\frac{d\varepsilon}{d\alpha}\Big) +C_{m_{\alpha_f}}$  
*Equation expressed in terms of aircraft (fuselage) angle of attack.*  

Coefficient of total pitch moment,  
$C_m =C_{m_0} +C_{m_{\alpha}}\alpha$  
$C_m =C_{m_0} +\frac{dC_m}{d\alpha_{abs}} \alpha_{abs}$  
$C_m =C_{m_0} +\Big(\frac{dC_m}{dC_L}\cdot \frac{dC_L}{d\alpha_{abs}}\Big) \alpha_{abs}$  
$C_m =C_{m_0} +\frac{dC_m}{dC_L} (C_{L_{\alpha_{abs}}}\alpha_{abs})$  
$C_m=C_{m_0}+C_{m_{C_L}}C_L$  

---

### Static Margin

Location of neutral point where $C_{m_{\alpha}}=0$,  
$0 =C_{L_{\alpha_w}}\Big( \frac{x_{CG}-x_{ac}}{\bar c}\Big) -\eta_HV_HC_{L_{\alpha_t}} \Big(1-\frac{d\varepsilon}{d\alpha}\Big) +C_{m_{\alpha_f}}$  
$\frac{x_{NP}}{\bar c} =\frac{x_{ac}}{\bar c} -\frac{C_{m_{\alpha_f}}} {C_{L_{\alpha_w}}} +\eta_HV_H \frac{C_{L_{\alpha_t}}} {C_{L_{\alpha_w}}}\Big(1-\frac{d\varepsilon}{d\alpha}\Big)$  

Static margin (stick-fixed),  
$SM =\frac{x_{NP}}{\bar c} -\frac{x_{CG}}{\bar c} =-\frac{C_{m_\alpha}}{C_{L_{\alpha_w}}} =-\frac{dC_m}{dC_L}$  
$C_{m_\alpha}$* is the trim curve slope of *$C_m$* vs *$\alpha$*.*  
$C_{L_{\alpha_w}}$* is the lift curve slope of *$C_L$* vs *$\alpha$*.*  
*For longitudinal static stability, *$SM>0$*.*  

---

### Maneuver Margin

Relative density parameter,  
$\mu =\frac{W}{\rho gl_tS}$  

Maneuver margin,  
$MM=SM +\frac{\eta_HV_H C_{L_{\alpha_t}}}{2\mu} =-\frac{d(C_{m_{CG}})_m}{dC_L}$  

Location of maneuver point,  
$MM =\frac{x_{NP}}{\bar c} -\frac{x_{CG}}{\bar c} +\frac{\eta_HV_H C_{L_{\alpha_t}}}{2\mu}$  
$0 =\frac{x_{NP}}{\bar c} -\frac{x_{MP}}{\bar c} +\frac{\eta_HV_H C_{L_{\alpha_t}}}{2\mu}$  
$\frac{x_{MP}}{\bar c} =\frac{x_{NP}}{\bar c} +\frac{\eta_HV_HC_{L_{\alpha_t}}} {2\mu}$  
*Note that *$C_{L_{\alpha_t}}$* is expressed in per radian.*  

## Longitudinal Control

### Elevator Control

Elevator effectiveness,  
$a_e =\frac{dC_{L_t}}{d\delta_e} =\frac{dC_{L_t}}{d\alpha_t} \frac{d\alpha_t}{d\delta_e} =\frac{dC_{L_t}}{d\alpha_t}\tau$  
*where *$\tau$* is elevator flap effectiveness*  

Aircraft lift coefficient vs elevator deflection,  
$C_{L_{\delta_e}} =\eta_H\frac{S_t}{S} \frac{dC_{L_t}}{d\delta_e} =\eta_H\frac{S_t}{S}a_e$  
*where *$\eta_H$* is horizontal tail efficiency*  

Elevator control power,  
$C_{m_{\delta_e}} =\frac{dC_m}{d\delta_e} =-\eta_HV_Ha_e$  

---

### Pitching Control

Total pitching moment (with elevator deflection),  
$C_m =C_{m_{\alpha=0}} +C_{m_\alpha}\alpha +C_{m_{\delta_e}}\delta_e$  
$C_m =C_{m_{L=0}} +\frac{dC_m}{dC_L}C_L +C_{m_{\delta_e}}\delta_e$  

#### Elevator Angle to Trim

Elevator deflection (in trim condition),  
$\delta_{e_{trim}} =-\frac{C_{m_0} +C_{m_\alpha}\alpha_{trim}} {C_{m_{\delta_e}}}$  
$\delta_{e_{trim}} =-\frac{C_{m_0}}{C_{m_{\delta_e}}} -\frac{dC_m/dC_L}{C_{m_{\delta_e}}} C_{L_{trim}}$  
$\delta_{e_{trim}} =-\frac{C_{m_0}}{C_{m_{\delta_e}}} +\frac{SM}{C_{m_{\delta_e}}} C_{L_{trim}}$  
$\delta_{e_{trim}} =\delta_{e_{trim_0}} +\frac{d\delta_{e_{trim}}} {dC_{L_{trim}}}C_{L_{trim}}$  
image.png  

Most forward location of $CG$ when trimmed at $C_{L_{max}}$,  
$\frac{x_{CG_f}}{\bar c} =\frac{x_{NP}}{\bar c} -\Big( \delta_{e_{min}} +\frac{C_{m_0}}{C_{m_{\delta_e}}} \Big) \frac{C_{m_{\delta_e}}}{C_{L_{max}}}$  

Most aft location of $CG$ at minimum static margin,  
$SM_{min} =\frac{x_{NP}}{\bar c} -\frac{x_{CG_a}}{\bar c}$  
*Minimum static margin is typically 0.05.*  

Range of allowable $CG$ locations,  
$\Delta\bar x_{CG} =\frac{x_{CG_a}}{\bar c} -\frac{x_{CG_f}}{\bar c}$  

## Directional & Lateral

### Directional Static Stability

Criterion for directional static stability,  
$ \frac{dC_n}{d\beta}=C_{n\beta}>0$  
*Positive yaw to counter positive sideslip.*  

Coefficient of yaw moment,  
$C_n =\frac{N}{\frac12\rho{V}^2Sb}$  

#### Wing-Fuselage Contribution

Coefficient of yaw moment,  
$ C_{n\beta_{wf}} =-k_nk_{RI} \frac{S_{fs}l_f}{Sb}$  
*where *$S_{fs}$* is the projected side area,  
and  *$l_f$* is the fuselage length*  

#### Vertical Tail Contribution

Coefficient of tail yaw moment,  
$C_{n\beta_{vt}} =\frac{dC_{n_{vt}}}{d\beta}$  
$C_{n\beta_{vt}} =V_{vt}\eta_{vt}C_{L_{\alpha_{vt}}} \Big(1+\frac{d\sigma}{d\beta}\Big)$  
*where *$\frac{d\sigma}{d\beta}$* is the sidewash factor*  

---

### Lateral Static Stability

Criterion for lateral static stability,  
$\frac{dC_l}{d\beta} =C_{l\beta} <0$  
*Negative roll to counter positive sideslip.*  

#### Vertical Tail Contribution

Coefficient of tail roll moment,  
$ C_{l\beta_{vt}} =-\frac{z_{vt}}{l_{vt}} C_{n\beta_{vt}}$  
*where *$z_{vt}$* is the height of tail *$ac$* from FRL,   
and  *$l_{vt}$* is the distance of tail *$ac$* from *$CG$  

---

### Rudder Control

Change in yaw moment due to rudder deflection,  
$\Delta C_{n_{\delta_r}} =-\eta_{vt}V_{vt} \frac{dC_{L_{vt}}}{d\delta_r} \delta_r$  

Rudder effectiveness and control power,  
$C_{n_{\delta_r}} =-\eta_{vt}V_{vt} \frac{dC_{L_{vt}}}{d\delta_r}$  
$C_{n_{\delta_r}} =-\eta_{vt}V_{vt}\Big( \frac{dC_{L_{vt}}} {d\alpha_{vt}}\cdot \frac{d\alpha_{vt}}{d\delta_r}\Big)$  
$C_{n_{\delta_r}} =-\eta_{vt}V_{vt} C_{L_{\alpha_{vt}}}\tau$  
*where *$\tau$* is rudder flap effectiveness*  

## Directional-Lateral Coupling

### Crosswind Landing

$0 =C_{l\beta}\beta +C_{l_{\delta_a}}\delta_a +C_{l_{\delta_r}}\delta_r$  
$0 =C_{n\beta}\beta +C_{n_{\delta_a}}\delta_a +C_{n_{\delta_r}}\delta_r$  
$0 =C_{Y\beta}\beta +C_{Y_{\delta_a}}\delta_a +C_{Y_{\delta_r}}\delta_r +\frac{Wsin\phi}{\frac12\rho{V_\infin}^2S}$  
*where *$Wsin\phi\equiv\ $*lateral weight component due to banking*  

#### Crabbed Approach

Implied conditions:  
- $\beta=0\degree$ *(Aircraft flies into relative wind)*
- $\delta_r=0\degree\ \ \  \delta_a=0\degree\ \ \  \phi=0\degree$ *(Solution)*

#### Sideslip Approach

Implied conditions:  
- $\beta ={tan^{-1}}\frac{v}{V_{\infin}}$ *(Aircraft flies at a fixed sideslip angle)*

---

### Single Engine Failure during Flight

Aircraft wheels have not touched the ground.  
$0 =C_{l\beta}\beta +C_{l_{\delta_r}}\delta_r +C_{l_{\delta_a}}\delta_a +\frac{L_E}{\frac12\rho{V_\infin}^2Sb}$  
$0 =C_{n\beta}\beta +C_{n_{\delta_r}}\delta_r +C_{n_{\delta_a}}\delta_a +\frac{N_E}{\frac12\rho{V_\infin}^2Sb}$  
$0 =C_{Y\beta}\beta +C_{Y_{\delta_r}}\delta_r +C_{Y_{\delta_a}}\delta_a +\frac{Wsin\phi}{\frac12\rho{V_\infin}^2S}$  
*where *$L_E\equiv\ $*roll moment due to engine failure,  
and *$N_E\equiv\ $*yaw moment due to engine failure*  

Implied conditions:  
- $\beta=0\degree$ *(To maintain same heading and if there is no crosswind)*
- $\phi=0\degree$ *(To maintain wings-level fight with no banking)*
- Calculated $\delta_r$ and $\delta_a$ must be within deflection limits
- For landing approach $\phi<5\degree$ *(Ground clearance)*

---

### Single Engine Failure during Ground Run

Aircraft wheels have touched the ground.  
$0 =C_{l\beta}\beta +C_{l_{\delta_r}}\delta_r +C_{l_{\delta_a}}\delta_a +\frac{L_E}{\frac12\rho{V_\infin}^2Sb}$  
$0 =C_{n\beta}\beta +C_{n_{\delta_r}}\delta_r +C_{n_{\delta_a}}\delta_a +\frac{N_E}{\frac12\rho{V_\infin}^2Sb}$  
$\frac{Y} {\frac12\rho{V_\infin}^2S} =C_{Y\beta}\beta +C_{Y_{\delta_r}}\delta_r +C_{Y_{\delta_a}}\delta_a +\frac{Wsin\phi}{\frac12\rho{V_\infin}^2S}$  
*where *$Y\equiv\ $*unbalanced side force of the rudder*  

Ground friction,  
$fr=\mu(W-L)$  
*If  *$Y<fr$*, aircraft will not skid.  
If  *$Y>fr$*, aircraft will skid.*  

Implied conditions:  
- $\beta=0\degree$ *(Aircraft’s motion is along the runway centerline)*
- $\phi=0\degree$ *(Aircraft is on the ground and cannot bank)*
- $L_E\approx0$ *(Small compared to yawing moment)*

## 6-DOF Modelling of Aircraft

Euler angles:  
- Yaw rotation $-\pi\le\psi\le\pi$
- Pitch rotation $-\frac\pi2\le\theta\le\frac\pi2$
- Roll rotation $-\pi\le\phi\le\pi$

Euler rates $(\dot\psi,\  \dot\theta,\  \dot\phi)$ are rotational rates about $z_i$, $y_1$, and $x_2$ axes respectively.  
- $\dot\psi$ is measured in the inertial frame *(inertia axis *$i$* → 1 → 2 → body-fixed axis *$b$*)*
- $\dot\theta$ is measured in frame 1 *(1 → 2 → body-fixed axis *$b$*)*
- $\dot\phi$ is measured in frame 2 *(2 → body-fixed axis *$b$*)*

image.png  
image.png  
image.png  

---

### Rotation Matrices

Convert from inertia axis $i$ $\rightarrow$ single-axis $1$,  
$\begin{Bmatrix} x_1\\y_1\\z_1 \end{Bmatrix} =\begin{bmatrix} cos\psi&sin\psi&0\\ -sin\psi&cos\psi&0\\ 0&0&1 \end{bmatrix} \begin{Bmatrix} x_i\\y_i\\z_i \end{Bmatrix} =T_{\psi} \begin{Bmatrix} x_i\\y_i\\z_i \end{Bmatrix}$  
*Note that *$T_\psi\equiv T_{1i}\equiv\ $*yaw rotation matrix.*  

Convert from single-axis $1$ $\rightarrow$ two-axis $2$,  
$\begin{Bmatrix} x_2\\y_2\\z_2 \end{Bmatrix} =\begin{bmatrix} cos\theta&0&-sin\theta\\ 0&1&0\\ sin\theta&0&cos\theta \end{bmatrix} \begin{Bmatrix} x_1\\y_1\\z_1 \end{Bmatrix} =T_{\theta} \begin{Bmatrix} x_1\\y_1\\z_1 \end{Bmatrix}$  
*Note that *$T_\theta\equiv T_{21}\equiv\ $*pitch rotation matrix.*  

Convert from two-axis $2$ $\rightarrow$ body-fixed axis $b$,  
$\begin{Bmatrix} x_b\\y_b\\z_b \end{Bmatrix} =\begin{bmatrix} 1&0&0\\ 0&cos\phi&sin\phi\\ 0&-sin\phi&cos\phi \end{bmatrix} \begin{Bmatrix} x_2\\y_2\\z_2 \end{Bmatrix} =T_{\phi} \begin{Bmatrix} x_2\\y_2\\z_2 \end{Bmatrix}$  
*Note that *$T_\phi\equiv T_{b,2}\equiv\ $*roll rotation matrix.*  

---

### Transformation Matrices

Convert from inertia axis $\rightarrow$ body-fixed axis,  
$\begin{Bmatrix} x_b\\y_b\\z_b \end{Bmatrix} =T_{\phi}T_{\theta}T_{\psi} \begin{Bmatrix} x_i\\y_i\\z_i \end{Bmatrix} =T_{b2}T_{21}T_{1i} \begin{Bmatrix} x_i\\y_i\\z_i \end{Bmatrix}$  
$\begin{Bmatrix} x_b\\y_b\\z_b \end{Bmatrix} =\begin{bmatrix} C_{\theta}C_{\psi}& C_{\theta}S_{\psi}& -S_{\theta}\\ S_{\phi}S_{\theta}C_{\psi} -C_{\phi}S_{\psi}& S_{\phi}S_{\theta}S_{\psi} +C_{\phi}C_{\psi}& S_{\phi}C_{\theta}\\ C_{\phi}S_{\theta}C_{\psi} +S_{\phi}S_{\psi}& C_{\phi}S_{\theta}S_{\psi} -S_{\phi}C_{\psi}& C_{\phi}C_{\theta} \end{bmatrix} \begin{Bmatrix} x_i\\y_i\\z_i \end{Bmatrix}$  
*where *$C\equiv cos$* and *$S\equiv sin$  

Convert from body-fixed axis $\rightarrow$ inertia axis,  
$\begin{Bmatrix} x_i\\y_i\\z_i \end{Bmatrix} =\begin{bmatrix} C_{\theta}C_{\psi}& S_{\phi}S_{\theta}C_{\psi} -C_{\phi}S_{\psi}& C_{\phi}S_{\theta}C_{\psi} +S_{\phi}S_{\psi}\\ C_{\theta}S_{\psi}& S_{\phi}S_{\theta}S_{\psi} +C_{\phi}C_{\psi}& C_{\phi}S_{\theta}S_{\psi} -S_{\phi}C_{\psi}\\ -S_{\theta}& S_{\phi}C_{\theta}& C_{\phi}C_{\theta} \end{bmatrix} \begin{Bmatrix} x_b\\y_b\\z_b \end{Bmatrix}$  
*where *$T_{ib} =(T_{bi})^{-1} =(T_{bi})^T =(T_{\phi}T_{\theta}T_{\psi})^T =(T_{\psi})^T (T_{\theta})^T (T_{\phi})^T$  

---

### Linear Velocity Transformation

Convert from inertia axis $\rightarrow$ body-fixed axis,  
$\begin{Bmatrix} u\\v\\w \end{Bmatrix} =\begin{bmatrix} C_{\theta}C_{\psi}& C_{\theta}S_{\psi}& -S_{\theta}\\ S_{\phi}S_{\theta}C_{\psi} -C_{\phi}S_{\psi}& S_{\phi}S_{\theta}S_{\psi} +C_{\phi}C_{\psi}& S_{\phi}C_{\theta}\\ C_{\phi}S_{\theta}C_{\psi} +S_{\phi}S_{\psi}& C_{\phi}S_{\theta}S_{\psi} -S_{\phi}C_{\psi}& C_{\phi}C_{\theta} \end{bmatrix} \begin{Bmatrix} \dot x_i\\ \dot y_i\\ \dot z_i \end{Bmatrix}$  

Convert from body-fixed axis $\rightarrow$ inertia axis,  
$\begin{Bmatrix} \dot x_i\\ \dot y_i\\ \dot z_i \end{Bmatrix} =\begin{bmatrix} C_{\theta}C_{\psi}& S_{\phi}S_{\theta}C_{\psi} -C_{\phi}S_{\psi}& C_{\phi}S_{\theta}C_{\psi} +S_{\phi}S_{\psi}\\ C_{\theta}S_{\psi}& S_{\phi}S_{\theta}S_{\psi} +C_{\phi}C_{\psi}& C_{\phi}S_{\theta}S_{\psi} -S_{\phi}C_{\psi}\\ -S_{\theta}& S_{\phi}C_{\theta}& C_{\phi}C_{\theta} \end{bmatrix} \begin{Bmatrix} u\\v\\w \end{Bmatrix}$  

---

### Angular Velocity Transformation

Convert from inertia axis $\rightarrow$ body-fixed axis,  
$\begin{Bmatrix} p\\q\\r \end{Bmatrix} =\begin{bmatrix} 1&0&-sin\theta\\ 0&cos\phi&sin\phi cos\theta\\ 0&-sin\phi&cos\phi cos\theta \end{bmatrix} \begin{Bmatrix} \dot\phi\\ \dot\theta\\ \dot\psi \end{Bmatrix}$  
*where *$p\equiv$* roll rate, *$q\equiv$* pitch rate, and *$r\equiv$* yaw rate*  

Convert from body-fixed axis $\rightarrow$ inertia axis,  
$\begin{Bmatrix} \dot\phi\\ \dot\theta\\ \dot\psi \end{Bmatrix} =\begin{bmatrix} 1& sin\phi tan\theta& cos\phi tan\theta\\ 0& cos\phi& -sin\phi\\ 0& sin\phi sec\theta& cos\phi sec\theta \end{bmatrix} \begin{Bmatrix} p\\q\\r \end{Bmatrix}$  

---

### Aircraft Equations of Motion (EoM)

General equation for total time derivative,  
$\Big(\frac{d\vec A}{dt}\Big) _{inertia} =\Big(\frac{d\vec A}{dt}\Big) _{rotating} +\vec\omega\times\vec A$  
*where *$\vec\omega$* is the angular velocity vector of the rotating frame (body)*  

Linear momentum of aircraft,  
$\vec L =m\vec V =m(u\hat i_b +v\hat j_b +w\hat k_b)$  

Angular momentum of aircraft,  
$\vec H =(pI_{xx}-rI_{xz})\hat i_b +(qI_{yy})\hat j_b +(-pI_{xz}+rI_{zz})\hat k_b$  

External forces acting on the aircraft,  
$\vec F_{ext} =m\vec a =\frac{d}{dt}m\vec V =\frac{d}{dt}\vec L$  
$\vec F_{ext} =\Big(\frac{d\vec L}{dt}\Big)_b +\vec\omega\times\vec L$  
$ X=m(\dot u+qw-rv)\\ Y=m(\dot v+ru-pw)\\ Z=m(\dot w+pv-qu)$  

External moments acting on the aircraft,  
$\vec M_{ext} =\vec I\vec\alpha =\frac{d}{dt}\vec I\vec\omega =\frac{d}{dt}\vec H$  
$\vec M_{ext} =\Big(\frac{d\vec H}{dt}\Big)_b +\vec\omega\times\vec H$  
$L =I_{xx}\dot p -I_{xz}\dot r +(I_{zz}-I_{yy})qr-I_{xz}pq\\ M =I_{yy}\dot q +(I_{xx}-I_{zz})pr +I_{xz}(p^2-r^2)\\ N =-I_{xz}\dot p +I_{zz}\dot r +(I_{yy}-I_{xx})pq +I_{xz}qr$  

## Linear Systems Theory

### Linearization

Steps to linearizing:  
- Solve for equilibrium/operating points by setting $f(x)=0$
- Take small variations around the equilibrium point $x=x_0+\Delta x$
- Linearize the equation by substituting the above into the original equation

Single-variable system,  
$\Delta\dot x =f'(x_0)\Delta x =A\Delta x$  

Multi-variable system,  
$\bold{\Delta\dot X} =\frac{\partial\bold{F}} {\partial\bold{X}} \Big\vert_{\bold{X_0}} \bold{\Delta X} =\bold{A\Delta X}$  

Jacobian matrix,  
$\bold{A}=\frac {\partial\bold{F}} {\partial\bold{X}} \Big\vert_{\bold{X_0}} =\begin{bmatrix} {\partial f_1}/{\partial x_1}& {\partial f_1}/{\partial x_2}& \dots& {\partial f_2}/{\partial x_n}\\ {\partial f_2}/{\partial x_1}& {\partial f_2}/{\partial x_2}& \dots& {\partial f_2}/{\partial x_n}\\ \vdots&\vdots&\ddots&\vdots\\ {\partial f_n}/{\partial x_1}& {\partial f_n}/{\partial x_2}& \dots& {\partial f_n}/{\partial x_n} \end{bmatrix}$  

Stability of a system (eigenvalues and eigenvectors):  
- Solve for the roots of the characteristic equation $|\bold{A}-\lambda\bold{I}|=0$
- System is stable if all of its eigenvalues are negative $\lambda_n<0$
- Substitute eigenvalue into matrix to obtain eigenvectors

### First-Order System (Spring-Damper)

Transfer function,  
$T(s) =\frac{X(s)}{F(s)} =\frac1{cs+k}$  

Total response of the system,  
$X(s) =\frac{F(s)}{cs+k} +\frac{cx_0}{cs+k}$  
$ X(s) =T(s)\cdot F(s)+T(s)\cdot cx_0$  
*1st term represents the forced response.  
2nd term represents the free response.*  

Free response of the system,  
$x(t) =x_0e^{s_1t} =x_0e^{-t/\tau}$  
*where time constant *$\tau=-\frac1{s_1}=\frac{c}{k}$  
Forced response to step input,  
$x(t)=\frac{F_0}{k}(1-e^{-t/\tau})$  
*where *$\frac{F_0}{k}=x_\infin$* when *$t\rightarrow\infin$  

### Second-Order System (Mass-Spring-Damper)

Transfer function,  
$T(s) =\frac{X(s)}{F(s)} =\frac{1}{ms^2+cs+k} =\frac1k\cdot \frac{{\omega_n}^2} {s^2+2\zeta\omega_ns+{\omega_n}^2}$  

Characteristic equation of the system,  
$CE=ms^2+cs+k$  
*If *$c^2-4mk>0$*, the system is overdamped (two distinct real poles).  
If *$c^2-4mk<0$*, the system is underdamped (two complex poles).  
If *$c^2-4mk=0$*, the system is critically damped (two repeated poles).*  

Natural frequency of a system,  
$\omega_n=\sqrt{\frac{k}{m}}$  

Critical damping constant of a system,  
$c_{cr} =2\sqrt{km} =2m\omega_n =\frac{2k}{\omega_n}$  

Damping ratio of a system,  
$\zeta =\frac{c}{c_{cr}} =\frac{c}{2\sqrt{km}} =\frac{c}{2m\omega_n} =\frac{c}{2k/\omega_n}$  

Total response of the system,  
$X(s) =\frac{F(s)}{ms^2+cs+k} +\frac{(ms+c)x_0+m\dot x_0} {ms^2+cs+k}$  
$X(s) =T(s)\cdot F(s) +T(s)\big[(ms+c)x_0+m\dot x_0\big]$  
*1st term represents the forced response.  
2nd term represents the free response.*  

image.png  

Forced response to step input, overdamped $\zeta>1$,  
$x(t) =\frac{F_0}{k}\bigg[ 1+\frac{\omega_n} {2\sqrt{\zeta^2-1}} \Big(\frac{e^{s_1t}}{s_1} +\frac{e^{s_2t}}{s_2}\Big)\bigg]$  
image.png  

Forced response to step input, underdamped $0<\zeta<1$,  
$x(t) =\frac{F_0}{k}\Big[1- \frac{e^{-\zeta\omega_nt}} {\sqrt{1-\zeta^2}} sin(\omega_dt+\phi)\Big]$  
*where *$tan\phi =\frac{\omega_d}{\zeta\omega_n} =\frac{\sqrt{1-\zeta^2}}{\zeta}$  

Rise time,  
$t_r =\frac{\pi-\phi}{\omega_d} =\frac{\pi-\phi} {\omega_n\sqrt{1-\zeta^2}}$  
Peak time,  
$t_p =\frac{\pi}{\omega_d} =\frac{\pi} {\omega_n\sqrt{1-\zeta^2}}$  

Percent overshoot,  
$M_p =e^{\frac{-\zeta\pi} {\sqrt{1-\zeta^2}}} \times100\%$  

$\pm$2% settling time,  
$t_{s(2\%)} =\frac{4}{\zeta\omega_n}$  
$\pm$5% settling time,  
$t_{s(5\%)} =\frac{3}{\zeta\omega_n}$  
image.png  

Forced response to step input, critically damped $\zeta=1$,  
$x(t) =\frac{F_0}{k} \big[1-e^{-\zeta\omega_nt}(1+\omega_nt)\big]$  
image.png  

Forced response to step input, undamped $\zeta=0$,  
$x(t) =\frac{F_0}{k} \big[1-cos(\omega_nt)\big]$  
image.png  

### Routh-Hurwitz Criterion

Stability of a system:  
- System is unstable if there is a sign change in the 1st column
- Number of sign changes → number of poles with positive real parts

image.png  

**Zero in the 1st Column**  
If the first element of a row is zero:  
- Replace the zero with $\varepsilon$
- $\varepsilon$ is allowed to approach zero from either the positive or negative side
- Determinants are expressed in terms of $\varepsilon$ and signs of each element is determined

Untitled  

**Entire Row is Zeroes**  
If the entire row is zeroes:  
- Form auxiliary polynomial using elements in the row above it as coefficients
- Differentiate the auxiliary polynomial with respect to $s$
- Replace the zeroes with coefficients of the derivative

### Steady-State Error

Initial value theorem,  
$f(0^+) =\lim\limits_{t\rightarrow0^+} \ f(t) =\lim\limits_{s\rightarrow\infin} \ sF(s)$  

Final value theorem,  
$f(\infin) =\lim\limits_{t\rightarrow\infin} \ f(t) =\lim\limits_{s\rightarrow0} \ sF(s)$  

Closed-loop transfer function,  
$M(s)=\frac{C(s)}{R(s)} =\frac{G(s)}{1+G(s)\cdot H(s)}$  
*If the feedback loop is positive, the sign in the denominator is “+”.*  

Steady-state error (negative unity feedback),  
$e(\infin) =\lim\limits_{t\rightarrow\infin} \ e(t) =\lim\limits_{s\rightarrow0} \ sE(s) =\lim\limits_{s\rightarrow0} \ \frac{sR(s)}{1+G(s)}$  
*whereby *$R(s)$* is the Laplace transform of the input*  

## Linearization of Aircraft EoM

### Nomenclature

- Axial velocity $u$
- Lateral velocity $v$
- Normal velocity $w$
- Roll rate $p$
- Pitch rate $q$
- Yaw rate $r$
- Axial force $X$
- Side force $Y$
- Normal force $Z$
- Roll moment $L$
- Pitch moment $M$
- Yaw moment $N$
image.png  

- Angle of attack $\alpha\approx\frac{w}{u}$
- Sideslip angle $\beta \approx\frac{v}{u} \approx\frac{v}{V}$
- Axial velocity $u=Vcos\beta cos\alpha$
- Lateral velocity $v=Vsin\beta$
- Normal velocity $w=Vcos\beta sin\alpha$
image.png  

---

### Reference Flight Condition

Small disturbance in angle of attack   
due to incremental normal velocity,  
$\Delta\alpha \approx\frac{\Delta w}{u_0}$  
$\alpha=\alpha_0+\Delta\alpha$  
$\theta=\theta_0-\Delta\alpha$  

image.png  

Small disturbance in angle of attack   
due to incremental pitch angle,  
$\Delta\alpha=\Delta\theta$  
$\alpha=\alpha_0+\Delta\alpha$  
$\theta=\theta_0+\Delta\theta$  

image.png  

---

### Linearized Equations

**Longitudinal Motion**  
Axial force equation,  
$\Delta\dot u =X_u\Delta u +X_w\Delta w +X_{\delta_e}\Delta\delta_e +X_{\delta_T}\Delta\delta_T -g(cos\theta_0)\Delta\theta$  

Normal force equation,  
$(1-Z_{\dot w})\Delta\dot w =Z_u\Delta u+Z_w\Delta w +(Z_q+u_0)\Delta q \\\ \ \ \ \ \ \ \ \ \ \ \ \  \ \ \ \ \ \ \ \ \ \ \ \ \ \  +Z_{\delta_e}\Delta\delta_e +Z_{\delta_T}\Delta\delta_T -g(sin\theta_0)\Delta\theta$  

Pitching moment equation,  
$\Delta\dot q =M_u\Delta u +M_w\Delta w +M_{\dot w}\Delta\dot w +M_q\Delta q +M_{\delta_e}\Delta\delta_e +M_{\delta_T}\Delta\delta_T$  

**Lateral-Directional Motion**  
Side force equation,  
$\Delta\dot v =Y_v\Delta v +Y_p\Delta p +(Y_r-u_0)\Delta r +Y_{\delta_r}\Delta\delta_r +g(cos\theta_0)\Delta\phi$  

Rolling moment equation,  
$\Delta\dot p -\frac{I_{xz}}{I_{xx}}\Delta\dot r =L_v\Delta v +L_p\Delta p +L_r\Delta r +L_{\delta_a}\Delta\delta_a +L_{\delta_r}\Delta\delta_r$  

Yawing moment equation,  
$\Delta\dot r -\frac{I_{xz}}{I_{zz}}\Delta\dot p =N_v\Delta v +N_p\Delta p +N_r\Delta r +N_{\delta_a}\Delta\delta_a +N_{\delta_r}\Delta\delta_r$  

## Aircraft Dynamics

### Longitudinal Dynamics

#### Long Period Approximation

Assumptions:  
- Pitching moment equation $\Delta\dot q=\dots\ $is neglected
- Change in angle of attack $\Delta\alpha\approx0$ such that normal velocity $\Delta w\approx0$
- Normal force derivative $Z_q\approx0$ such that initial aircraft velocity $u_0\gg Z_q$
- Aircraft is initially in level flight where $\theta_0=0$ *(small angle approximation)*

Axial force and normal force equations simplify to,  
$ \begin{Bmatrix} \Delta\dot u\\ \Delta\dot\theta \end{Bmatrix} =\begin{bmatrix} X_u&-g\\ -\frac{Z_u}{u_0}&0 \end{bmatrix} \begin{Bmatrix} \Delta u\\ \Delta\theta \end{Bmatrix}$  
$0 =\lambda^2 -X_u\lambda -\frac{Z_ug}{u_0}$  

Natural frequency of oscillation,  
$\omega_{n,phu} =\sqrt{-\frac{Z_ug}{u_0}} =\sqrt2\frac{g}{u_0}$  
Damping ratio of oscillation,  
$\zeta_{phu} =-\frac{X_u}{2\omega_{n_{phu}}} =\frac1{\sqrt2}\frac1{L/D}$  

#### Short Period Approximation

Assumptions:  
- Axial force equation $\Delta\dot u=\dots\ $ is neglected
- Change in aircraft velocity $\Delta u\approx0$
- $Z_q\ll u_0$ and $Z_{\dot w}\ll1$
- Aircraft is initially in level flight where $\theta_0=0$ *(small angle approximation)*

Normal force and pitching moment equations simplify to,  
$\begin{Bmatrix} \Delta\dot\alpha\\ \Delta\dot q \end{Bmatrix} =\begin{bmatrix} \frac{Z_\alpha}{u_0}&1\\ M_\alpha +M_{\dot\alpha}\frac{Z_\alpha}{u_0} &M_{\dot\alpha}+M_q \end{bmatrix} \begin{Bmatrix} \Delta\alpha\\ \Delta q \end{Bmatrix}$  
$0 =\lambda^2 -\Big(M_{\dot\alpha}+M_q +\frac{Z_\alpha}{u_0}\Big)\lambda +\Big(M_q\frac{Z_\alpha}{u_0} -M_\alpha\Big)$  

Natural frequency of oscillation,  
$\omega_{n,spo} =\sqrt{M_q\frac{Z_\alpha}{u_0} -M_\alpha}$  
Damping ratio of oscillation,  
$\zeta_{spo} =\frac{-(M_{\dot\alpha}+M_q +Z_\alpha/u_0)} {2\omega_{n_{spo}}}$  

#### 1-DOF Approximation to Pure Pitching Motion

Simplifications and substitutions:  
- Change in aircraft velocity $\Delta u=0$
- $\Delta\alpha =\Delta\theta =\frac{\Delta w}{u_0}$
- $\Delta\dot\alpha =\Delta\dot\theta =\Delta q$

From Newton’s 2nd law,  
$I_{yy}\Delta\ddot\theta =\Delta M_{CG}$  
$I_{yy}\Delta\ddot\theta =\frac{\partial M}{\partial\alpha} \Delta\alpha +\frac{\partial M}{\partial\dot\alpha} \Delta\dot\alpha +\frac{\partial M}{\partial q} \Delta q +\frac{\partial M}{\partial\delta_e} \Delta\delta_e$  
$I_{yy}\Delta\ddot\theta =\frac{\partial M}{\partial\alpha} \Delta\alpha +\Big( \frac{\partial M}{\partial\dot\alpha} +\frac{\partial M}{\partial q} \Big)\Delta\dot\alpha +\frac{\partial M}{\partial\delta_e} \Delta\delta_e$  
$\Delta\ddot\theta =\frac1{I_{yy}} \frac{\partial M}{\partial\alpha} \Delta\alpha +\frac1{I_{yy}}\Big( \frac{\partial M}{\partial\dot\alpha} +\frac{\partial M}{\partial q} \Big)\Delta\dot\alpha +\frac1{I_{yy}} \frac{\partial M}{\partial\delta_e} \Delta\delta_e$  
$\Delta\ddot\alpha =M_{\alpha}\Delta\alpha +(M_{\dot\alpha}+M_q) \Delta\dot\alpha +M_{\delta_e}\Delta\delta_e$  
$M_{\delta_e}\Delta\delta_e =\Delta\ddot\alpha -(M_{\dot\alpha}+M_q) \Delta\dot\alpha -M_{\alpha}\Delta\alpha$  
*Equation is a 2nd-order non-homogeneous ODE.*  

In dynamic stability analysis, elevator input is zero.  
$0 =\Delta\ddot\alpha -(M_{\dot\alpha}+M_q) \Delta\dot\alpha -M_{\alpha}\Delta\alpha$  
*Equation is a 2nd-order homogeneous ODE.*  

Natural frequency of motion,  
$\omega_{n,pitch} =\sqrt{-M_\alpha}$  
Damping ratio of motion,  
$\zeta_{pitch} =\frac{-(M_{\dot\alpha}+M_q)} {2\omega_{n_{pitch}}}$  

**Pitching Response to Step Elevator Input**  
Response of a 2nd-order system to a step input,  
$\Delta\alpha(t) =\Delta\alpha_{trim}\Big[ 1-\frac1{\sqrt{1-\zeta^2}} e^{-\zeta\omega_nt} sin(\omega_dt+\phi)\Big]$  
*where desired change in trim angle of attack *$\Delta\alpha_{trim} =-\frac{M_{\delta_e}}{M_\alpha} \Delta\delta_e$  

### Lateral-Directional Dynamics

#### Spiral Mode Approximation

Assumptions:  
- Side force equation $\Delta\dot v=\dots\ $is neglected
- Negligible roll rate $\Delta p\approx0$
- Negligible moments of inertia $\frac{I_{xz}}{I_{xx}}\approx0$ and $\frac{I_{xz}}{I_{zz}}\approx0$

Rolling and yawing moment equations simplify to,  
$0 =L_\beta\Delta\beta +L_r\Delta r$  
$\Delta\dot r =N_\beta\Delta\beta +N_r\Delta r$  

Combining both equations,  
$0 =\Delta\dot r +\frac{L_rN_\beta -L_\beta N_r}{L_\beta}\Delta r$  
$0=\lambda +\frac{L_rN_\beta -L_\beta N_r}{L_\beta}$  

For a stable spiral mode,  
$\lambda_{spiral} =-\frac{L_rN_\beta -L_\beta N_r}{L_\beta}<0$  
Time constant of spiral mode,  
$\tau =-\frac1{s_1} =-\frac1{\lambda_{spiral}}$  

#### Dutch Roll Approximation

Assumptions:  
- Rolling moment equation $\Delta\dot p=\dots\ $is neglected
- Negligible rolling motion such that $\Delta p=0$ and $\Delta\phi=0$
- Negligible moments of inertia $\frac{I_{xz}}{I_{xx}}\approx0$ and $\frac{I_{xz}}{I_{zz}}\approx0$

Side force and yawing moment equations simplify to,  
$\begin{Bmatrix} \Delta\dot\beta\\ \Delta\dot r \end{Bmatrix} =\begin{bmatrix} \frac{Y_\beta}{u_0}& \frac{Y_r}{u_0}-1\\ N_\beta&N_r \end{bmatrix} \begin{Bmatrix} \Delta\beta\\ \Delta r \end{Bmatrix}$  
$0 =\lambda^2 -\frac{Y_\beta+u_0N_r}{u_0}\lambda +\frac{Y_\beta N_r-Y_rN_\beta +u_0N_\beta}{u_0}$  

Natural frequency of Dutch roll,  
$\omega_{n,DR} =\sqrt{\frac{Y_\beta N_r -Y_rN_\beta+u_0N_\beta}{u_0}}$  
Damping ratio of Dutch roll,  
$\zeta_{DR} =-\frac{Y_\beta+u_0N_r} {2u_0\omega_{n,DR}}$  

#### 1-DOF Approximation to Pure Rolling Motion

From Newton’s 2nd law,  
$I_{xx}\Delta\ddot\phi =\Delta L_{CG}$  
$I_{xx}\Delta\dot p =\frac{\partial L}{\partial p} \Delta p +\frac{\partial L}{\partial\delta_a} \Delta\delta_a$  
$\Delta\dot p =\frac{1}{I_{xx}} \frac{\partial L}{\partial p} \Delta p +\frac{1}{I_{xx}} \frac{\partial L}{\partial\delta_a} \Delta\delta_a$  
$\Delta\dot p =L_p\Delta p +L_{\delta_a}\Delta\delta_a$  
$L_{\delta_a}\Delta\delta_a =\Delta\dot p -L_p\Delta p$  
*Equation is a 1st-order ODE.*  

Roots of characteristic equation,  
$\lambda_{roll}=L_p$  

Time constant of motion,  
$\tau =-\frac1{s_1} =-\frac1{L_p}$  
Rewriting the equation,  
$L_{\delta_a}\Delta\delta_a =\Delta\dot p -L_p\Delta p$  
$-\frac{L_{\delta_a}}{L_p} \Delta\delta_a =-\frac1{L_p}\Delta\dot p +\Delta p$  
$-\frac{L_{\delta_a}}{L_p} \Delta\delta_a =\tau\Delta\dot p +\Delta p$  

Solution to 1st-order ODE,  
$\Delta p(t) =-\frac{L_{\delta_a}}{L_p} \Delta\delta_a (1-e^{-t/\tau})$  
Steady-state solution to 1st-order ODE,  
$\Delta p_{ss} =-\frac{L_{\delta_a}}{L_p} \Delta\delta_a$  

#### 1-DOF Approximation to Pure Yawing Motion

From Newton’s 2nd law,  
$I_{zz}\Delta\ddot\psi =\Delta N_{CG}$  
$I_{zz}\Delta\ddot\psi =\frac{\partial N}{\partial\beta} \Delta\beta +\frac{\partial N}{\partial r} \Delta r +\frac{\partial N}{\partial\delta_r} \Delta\delta_r$  
$\Delta\ddot\psi =\frac{1}{I_{zz}} \frac{\partial N}{\partial\beta} \Delta\beta +\frac{1}{I_{zz}} \frac{\partial N}{\partial r} \Delta r +\frac{1}{I_{zz}} \frac{\partial N}{\partial\delta_r} \Delta\delta_r$  
*Note that *$\psi=-\beta$*.*  

In terms of sideslip angle,  
$\Delta\ddot\psi =N_\beta\Delta\beta +N_r\Delta\dot\psi +N_{\delta_r}\Delta\delta_r$  
$-\Delta\ddot\beta =N_\beta\Delta\beta -N_r\Delta\dot\beta +N_{\delta_r}\Delta\delta_r$  
$-N_{\delta_r}\Delta\delta_r =\Delta\ddot\beta -N_r\Delta\dot\beta +N_\beta\Delta\beta$  
In terms of yaw angle,  
$\Delta\ddot\psi =N_\beta\Delta\beta +N_r\Delta\dot\psi +N_{\delta_r}\Delta\delta_r$  
$\Delta\ddot\psi =-N_\beta\Delta\psi +N_r\Delta\dot\psi +N_{\delta_r}\Delta\delta_r$  
$N_{\delta_r}\Delta\delta_r =\Delta\ddot\psi -N_r\Delta\dot\psi +N_\beta\Delta\psi$  
*Equation is a 2nd-order non-homogeneous ODE.*  

Natural frequency of motion,  
$\omega_{n,yaw} =\sqrt{N_\beta}$  
Damping ratio of motion,  
$\zeta_{yaw} =-\frac{N_r}{2\omega_{n,yaw}}$  

Solution to 2nd-order ODE,  
$\Delta\beta(t) =\Delta\beta_{trim}\Big[1 -\frac{e^{-\zeta\omega_nt}}{\sqrt{1-\zeta^2}} sin(\omega_dt+\phi)\Big]$  
*where *$tan\phi =\frac{\omega_d}{\zeta\omega_n} =\frac{\sqrt{1-\zeta^2}}{\zeta}$  

Desired change in trim sideslip angle,  
$\Delta\beta_{trim} =-\frac{N_{\delta_r}}{N_\beta} \Delta\delta_r$  

#### Yaw Damper

**With Yaw Rate Feedback**  
Feedback of system,  
$(\Delta\delta_r)_{feedback} =k\Delta\dot\psi$  

Yawing motion equation with feedback,  
$N_{\delta_r}\Delta\delta_r +N_{\delta_r}(\Delta\delta_r) _{feedback} =\Delta\ddot\psi -N_r\Delta\dot\psi +N_\beta\Delta\psi$  
$N_{\delta_r}\Delta\delta_r +kN_{\delta_r}\Delta\dot\psi =\Delta\ddot\psi -N_r\Delta\dot\psi +N_\beta\Delta\psi$  
$N_{\delta_r}\Delta\delta_r =\Delta\ddot\psi -(N_r-kN_{\delta_r})\Delta\dot\psi +N_\beta\Delta\psi$  
*Equation is a 2nd-order non-homogeneous ODE.*  

Natural frequency remains unchanged,  
$\omega_{n,yaw} =\sqrt{N_\beta}$  
Damping ratio is altered,  
$\zeta_{yaw\ damper} =-\frac{N_r+kN_{\delta_r}}{2\omega_{n,yaw}}$  

**With Yaw Rate and Yaw Angle Feedback**  
Feedback of system,  
$(\Delta\delta_r)_{feedback} =k_1\Delta\dot\psi +k_2\Delta\psi$  

Yawing motion equation with feedback,  
$N_{\delta_r}\Delta\delta_r +N_{\delta_r}(\Delta\delta_r) _{feedback} =\Delta\ddot\psi -N_r\Delta\dot\psi +N_\beta\Delta\psi$  
$N_{\delta_r}\Delta\delta_r +k_1N_{\delta_r}\Delta\dot\psi +k_2N_{\delta_r}\Delta\psi =\Delta\ddot\psi -N_r\Delta\dot\psi +N_\beta\Delta\psi$  
$N_{\delta_r}\Delta\delta_r =\Delta\ddot\psi -(N_r+k_1N_{\delta_r}) \Delta\dot\psi +(N_\beta-k_2N_{\delta_r}) \Delta\psi$  
*Equation is a 2nd-order non-homogeneous ODE.*  

Natural frequency is altered,  
$\omega_{n,yaw\ damper} =\sqrt{N_\beta-k_2N_{\delta_r}}$  
Damping ratio is altered,  
$\zeta_{yaw\ damper} =-\frac{N_r+k_1N_{\delta_r}} {2\omega_{n,yaw\ damper}}$  
