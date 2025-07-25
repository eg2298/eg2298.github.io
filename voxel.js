(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Ln="178",Qi={ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},No=0,$n=1,Oo=2,Zs=1,Fo=2,Jt=3,fi=0,Mt=1,$t=2,di=0,er=1,Qn=2,es=3,ts=4,zo=5,bi=100,Bo=101,Ho=102,ko=103,Go=104,Vo=200,Wo=201,Xo=202,jo=203,Va=204,Wa=205,Yo=206,qo=207,Ko=208,Zo=209,Jo=210,$o=211,Qo=212,el=213,tl=214,Xa=0,ja=1,Ya=2,rr=3,qa=4,Ka=5,Za=6,Ja=7,Js=0,il=1,rl=2,pi=0,al=1,nl=2,sl=3,ol=4,ll=5,cl=6,hl=7,$s=300,ar=301,nr=302,$a=303,Qa=304,sa=306,en=1e3,wi=1001,tn=1002,Bt=1003,ul=1004,wr=1005,kt=1006,da=1007,Ri=1008,ii=1009,Qs=1010,eo=1011,_r=1012,Dn=1013,Pi=1014,Qt=1015,Sr=1016,In=1017,Nn=1018,vr=1020,to=35902,io=1021,ro=1022,zt=1023,xr=1026,Mr=1027,ao=1028,On=1029,no=1030,Fn=1031,zn=1033,Zr=33776,Jr=33777,$r=33778,Qr=33779,rn=35840,an=35841,nn=35842,sn=35843,on=36196,ln=37492,cn=37496,hn=37808,un=37809,dn=37810,pn=37811,fn=37812,mn=37813,gn=37814,_n=37815,vn=37816,xn=37817,Mn=37818,En=37819,Sn=37820,yn=37821,ea=36492,Tn=36494,bn=36495,so=36283,An=36284,wn=36285,Rn=36286,dl=3200,pl=3201,fl=0,ml=1,ui="",Ct="srgb",sr="srgb-linear",ra="linear",Xe="srgb",Fi=7680,is=519,gl=512,_l=513,vl=514,oo=515,xl=516,Ml=517,El=518,Sl=519,rs=35044,as="300 es",ei=2e3,aa=2001;class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const n=a.indexOf(t);n!==-1&&a.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let n=0,s=a.length;n<s;n++)a[n].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,Cn=180/Math.PI;function yr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ft[r&255]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]).toLowerCase()}function ze(r,e,t){return Math.max(e,Math.min(t,r))}function yl(r,e){return(r%e+e)%e}function pa(r,e,t){return(1-t)*r+t*e}function ur(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Tl={DEG2RAD:ta};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*a+e.x,this.y=n*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ui{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,n,s,o){let l=i[a+0],c=i[a+1],u=i[a+2],p=i[a+3];const d=n[s+0],m=n[s+1],x=n[s+2],M=n[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=M;return}if(p!==M||l!==d||c!==m||u!==x){let f=1-o;const h=l*d+c*m+u*x+p*M,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const D=Math.sqrt(T),U=Math.atan2(D,h*A);f=Math.sin(f*U)/D,o=Math.sin(o*U)/D}const S=o*A;if(l=l*f+d*S,c=c*f+m*S,u=u*f+x*S,p=p*f+M*S,f===1-o){const D=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=D,c*=D,u*=D,p*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,a,n,s){const o=i[a],l=i[a+1],c=i[a+2],u=i[a+3],p=n[s],d=n[s+1],m=n[s+2],x=n[s+3];return e[t]=o*x+u*p+l*m-c*d,e[t+1]=l*x+u*d+c*p-o*m,e[t+2]=c*x+u*m+o*d-l*p,e[t+3]=u*x-o*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,n=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(a/2),p=o(n/2),d=l(i/2),m=l(a/2),x=l(n/2);switch(s){case"XYZ":this._x=d*u*p+c*m*x,this._y=c*m*p-d*u*x,this._z=c*u*x+d*m*p,this._w=c*u*p-d*m*x;break;case"YXZ":this._x=d*u*p+c*m*x,this._y=c*m*p-d*u*x,this._z=c*u*x-d*m*p,this._w=c*u*p+d*m*x;break;case"ZXY":this._x=d*u*p-c*m*x,this._y=c*m*p+d*u*x,this._z=c*u*x+d*m*p,this._w=c*u*p-d*m*x;break;case"ZYX":this._x=d*u*p-c*m*x,this._y=c*m*p+d*u*x,this._z=c*u*x-d*m*p,this._w=c*u*p+d*m*x;break;case"YZX":this._x=d*u*p+c*m*x,this._y=c*m*p+d*u*x,this._z=c*u*x-d*m*p,this._w=c*u*p-d*m*x;break;case"XZY":this._x=d*u*p-c*m*x,this._y=c*m*p-d*u*x,this._z=c*u*x+d*m*p,this._w=c*u*p+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],n=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],p=t[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(n-c)*m,this._z=(s-a)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(u-l)/m,this._x=.25*m,this._y=(a+s)/m,this._z=(n+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(n-c)/m,this._x=(a+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(s-a)/m,this._x=(n+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,n=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+a*c-n*l,this._y=a*u+s*l+n*o-i*c,this._z=n*u+s*c+i*l-a*o,this._w=s*u-i*o-a*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,n=this._z,s=this._w;let o=s*e._w+i*e._x+a*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=a,this._z=n,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*i+t*this._x,this._y=m*a+t*this._y,this._z=m*n+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),p=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*p+this._w*d,this._x=i*p+this._x*d,this._y=a*p+this._y*d,this._z=n*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ns.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ns.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*a,this.y=n[1]*t+n[4]*i+n[7]*a,this.z=n[2]*t+n[5]*i+n[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*a+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*a+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*a+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*a+n[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,n=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),u=2*(o*t-n*a),p=2*(n*i-s*t);return this.x=t+l*c+s*p-o*u,this.y=i+l*u+o*c-n*p,this.z=a+l*p+n*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*a,this.y=n[1]*t+n[5]*i+n[9]*a,this.z=n[2]*t+n[6]*i+n[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,n=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-n*o,this.y=n*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new O,ns=new Ui;class Le{constructor(e,t,i,a,n,s,o,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,n,s,o,l,c)}set(e,t,i,a,n,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=n,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,n=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],p=i[7],d=i[2],m=i[5],x=i[8],M=a[0],f=a[3],h=a[6],A=a[1],T=a[4],S=a[7],D=a[2],U=a[5],R=a[8];return n[0]=s*M+o*A+l*D,n[3]=s*f+o*T+l*U,n[6]=s*h+o*S+l*R,n[1]=c*M+u*A+p*D,n[4]=c*f+u*T+p*U,n[7]=c*h+u*S+p*R,n[2]=d*M+m*A+x*D,n[5]=d*f+m*T+x*U,n[8]=d*h+m*S+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*n*u+i*o*l+a*n*c-a*s*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=u*s-o*c,d=o*l-u*n,m=c*n-s*l,x=t*p+i*d+a*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=p*M,e[1]=(a*c-u*i)*M,e[2]=(o*i-a*s)*M,e[3]=d*M,e[4]=(u*t-a*l)*M,e[5]=(a*n-o*t)*M,e[6]=m*M,e[7]=(i*l-c*t)*M,e[8]=(s*t-i*n)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,n,s,o){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Le;function lo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function na(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bl(){const r=na("canvas");return r.style.display="block",r}const ss={};function tr(r){r in ss||(ss[r]=!0,console.warn(r))}function Al(r,e,t){return new Promise(function(i,a){function n(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:i()}}setTimeout(n,t)})}function wl(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rl(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const os=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ls=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cl(){const r={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===Xe&&(a.r=ti(a.r),a.g=ti(a.g),a.b=ti(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Xe&&(a.r=ir(a.r),a.g=ir(a.g),a.b=ir(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ui?ra:this.spaces[a].transfer},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[sr]:{primaries:e,whitePoint:i,transfer:ra,toXYZ:os,fromXYZ:ls,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:Xe,toXYZ:os,fromXYZ:ls,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),r}const Ge=Cl();function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zi;class Pl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zi===void 0&&(zi=na("canvas")),zi.width=e.width,zi.height=e.height;const a=zi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=zi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),n=a.data;for(let s=0;s<n.length;s++)n[s]=ti(n[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ti(t[i]/255)*255):t[i]=ti(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ul=0;class Bn{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let n;if(Array.isArray(a)){n=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?n.push(ga(a[s].image)):n.push(ga(a[s]))}else n=ga(a);i.url=n}return t||(e.images[this.uuid]=i),i}}function ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Pl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ll=0;const _a=new O;class Et extends Ii{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,i=wi,a=wi,n=kt,s=Ri,o=zt,l=ii,c=Et.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=yr(),this.name="",this.source=new Bn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$s)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case en:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case tn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case en:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case tn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=$s;Et.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,a=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,n;const s=e.elements,o=s[0],l=s[4],c=s[8],u=s[1],p=s[5],d=s[9],m=s[2],x=s[6],M=s[10];if(Math.abs(l-u)<.01&&Math.abs(c-m)<.01&&Math.abs(d-x)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+m)<.1&&Math.abs(d+x)<.1&&Math.abs(o+p+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const h=(o+1)/2,A=(p+1)/2,T=(M+1)/2,S=(l+u)/4,D=(c+m)/4,U=(d+x)/4;return h>A&&h>T?h<.01?(i=0,a=.707106781,n=.707106781):(i=Math.sqrt(h),a=S/i,n=D/i):A>T?A<.01?(i=.707106781,a=0,n=.707106781):(a=Math.sqrt(A),i=S/a,n=U/a):T<.01?(i=.707106781,a=.707106781,n=0):(n=Math.sqrt(T),i=D/n,a=U/n),this.set(i,a,n,t),this}let f=Math.sqrt((x-d)*(x-d)+(c-m)*(c-m)+(u-l)*(u-l));return Math.abs(f)<.001&&(f=1),this.x=(x-d)/f,this.y=(c-m)/f,this.z=(u-l)/f,this.w=Math.acos((o+p+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dl extends Ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const a={width:e,height:t,depth:i.depth},n=new Et(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,n=this.textures.length;a<n;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Bn(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Dl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class co extends Et{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Il extends Et{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=n.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,It):It.fromBufferAttribute(n,s),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const a=e.children;for(let n=0,s=a.length;n<s;n++)this.expandByObject(a[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),Cr.subVectors(this.max,dr),Bi.subVectors(e.a,dr),Hi.subVectors(e.b,dr),ki.subVectors(e.c,dr),ai.subVectors(Hi,Bi),ni.subVectors(ki,Hi),vi.subVectors(Bi,ki);let t=[0,-ai.z,ai.y,0,-ni.z,ni.y,0,-vi.z,vi.y,ai.z,0,-ai.x,ni.z,0,-ni.x,vi.z,0,-vi.x,-ai.y,ai.x,0,-ni.y,ni.x,0,-vi.y,vi.x,0];return!va(t,Bi,Hi,ki,Cr)||(t=[1,0,0,0,1,0,0,0,1],!va(t,Bi,Hi,ki,Cr))?!1:(Pr.crossVectors(ai,ni),t=[Pr.x,Pr.y,Pr.z],va(t,Bi,Hi,ki,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jt=[new O,new O,new O,new O,new O,new O,new O,new O],It=new O,Rr=new Tr,Bi=new O,Hi=new O,ki=new O,ai=new O,ni=new O,vi=new O,dr=new O,Cr=new O,Pr=new O,xi=new O;function va(r,e,t,i,a){for(let n=0,s=r.length-3;n<=s;n+=3){xi.fromArray(r,n);const o=a.x*Math.abs(xi.x)+a.y*Math.abs(xi.y)+a.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Nl=new Tr,pr=new O,xa=new O;class Hn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Nl.setFromPoints(e).getCenter(i);let a=0;for(let n=0,s=e.length;n<s;n++)a=Math.max(a,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(pr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(xa)),this.expandByPoint(pr.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yt=new O,Ma=new O,Ur=new O,si=new O,Ea=new O,Lr=new O,Sa=new O;class ho{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Ma.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),si.copy(this.origin).sub(Ma);const n=e.distanceTo(t)*.5,s=-this.direction.dot(Ur),o=si.dot(this.direction),l=-si.dot(Ur),c=si.lengthSq(),u=Math.abs(1-s*s);let p,d,m,x;if(u>0)if(p=s*l-o,d=s*o-l,x=n*u,p>=0)if(d>=-x)if(d<=x){const M=1/u;p*=M,d*=M,m=p*(p+s*d+2*o)+d*(s*p+d+2*l)+c}else d=n,p=Math.max(0,-(s*d+o)),m=-p*p+d*(d+2*l)+c;else d=-n,p=Math.max(0,-(s*d+o)),m=-p*p+d*(d+2*l)+c;else d<=-x?(p=Math.max(0,-(-s*n+o)),d=p>0?-n:Math.min(Math.max(-n,-l),n),m=-p*p+d*(d+2*l)+c):d<=x?(p=0,d=Math.min(Math.max(-n,-l),n),m=d*(d+2*l)+c):(p=Math.max(0,-(s*n+o)),d=p>0?n:Math.min(Math.max(-n,-l),n),m=-p*p+d*(d+2*l)+c);else d=s>0?-n:n,p=Math.max(0,-(s*d+o)),m=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Ma).addScaledVector(Ur,d),m}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const i=Yt.dot(this.direction),a=Yt.dot(Yt)-i*i,n=e.radius*e.radius;if(a>n)return null;const s=Math.sqrt(n-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,n,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),u>=0?(n=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(n=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||n>a||((n>i||isNaN(i))&&(i=n),(s<a||isNaN(a))&&(a=s),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,i,a,n){Ea.subVectors(t,e),Lr.subVectors(i,e),Sa.crossVectors(Ea,Lr);let s=this.direction.dot(Sa),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;si.subVectors(this.origin,e);const l=o*this.direction.dot(Lr.crossVectors(si,Lr));if(l<0)return null;const c=o*this.direction.dot(Ea.cross(si));if(c<0||l+c>s)return null;const u=-o*si.dot(Sa);return u<0?null:this.at(u/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,a,n,s,o,l,c,u,p,d,m,x,M,f){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,n,s,o,l,c,u,p,d,m,x,M,f)}set(e,t,i,a,n,s,o,l,c,u,p,d,m,x,M,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=a,h[1]=n,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=p,h[14]=d,h[3]=m,h[7]=x,h[11]=M,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Gi.setFromMatrixColumn(e,0).length(),n=1/Gi.setFromMatrixColumn(e,1).length(),s=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,n=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(n),p=Math.sin(n);if(e.order==="XYZ"){const d=s*u,m=s*p,x=o*u,M=o*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=m+x*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=x+m*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,m=l*p,x=c*u,M=c*p;t[0]=d+M*o,t[4]=x*o-m,t[8]=s*c,t[1]=s*p,t[5]=s*u,t[9]=-o,t[2]=m*o-x,t[6]=M+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,m=l*p,x=c*u,M=c*p;t[0]=d-M*o,t[4]=-s*p,t[8]=x+m*o,t[1]=m+x*o,t[5]=s*u,t[9]=M-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,m=s*p,x=o*u,M=o*p;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+M,t[1]=l*p,t[5]=M*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,m=s*c,x=o*l,M=o*c;t[0]=l*u,t[4]=M-d*p,t[8]=x*p+m,t[1]=p,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*p+x,t[10]=d-M*p}else if(e.order==="XZY"){const d=s*l,m=s*c,x=o*l,M=o*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=d*p+M,t[5]=s*u,t[9]=m*p-x,t[2]=x*p-m,t[6]=o*u,t[10]=M*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ol,e,Fl)}lookAt(e,t,i){const a=this.elements;return yt.subVectors(e,t),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),oi.crossVectors(i,yt),oi.lengthSq()===0&&(Math.abs(i.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),oi.crossVectors(i,yt)),oi.normalize(),Dr.crossVectors(yt,oi),a[0]=oi.x,a[4]=Dr.x,a[8]=yt.x,a[1]=oi.y,a[5]=Dr.y,a[9]=yt.y,a[2]=oi.z,a[6]=Dr.z,a[10]=yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,n=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],p=i[5],d=i[9],m=i[13],x=i[2],M=i[6],f=i[10],h=i[14],A=i[3],T=i[7],S=i[11],D=i[15],U=a[0],R=a[4],I=a[8],E=a[12],v=a[1],C=a[5],k=a[9],B=a[13],X=a[2],Q=a[6],W=a[10],ee=a[14],H=a[3],ie=a[7],fe=a[11],Re=a[15];return n[0]=s*U+o*v+l*X+c*H,n[4]=s*R+o*C+l*Q+c*ie,n[8]=s*I+o*k+l*W+c*fe,n[12]=s*E+o*B+l*ee+c*Re,n[1]=u*U+p*v+d*X+m*H,n[5]=u*R+p*C+d*Q+m*ie,n[9]=u*I+p*k+d*W+m*fe,n[13]=u*E+p*B+d*ee+m*Re,n[2]=x*U+M*v+f*X+h*H,n[6]=x*R+M*C+f*Q+h*ie,n[10]=x*I+M*k+f*W+h*fe,n[14]=x*E+M*B+f*ee+h*Re,n[3]=A*U+T*v+S*X+D*H,n[7]=A*R+T*C+S*Q+D*ie,n[11]=A*I+T*k+S*W+D*fe,n[15]=A*E+T*B+S*ee+D*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],n=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],p=e[6],d=e[10],m=e[14],x=e[3],M=e[7],f=e[11],h=e[15];return x*(+n*l*p-a*c*p-n*o*d+i*c*d+a*o*m-i*l*m)+M*(+t*l*m-t*c*d+n*s*d-a*s*m+a*c*u-n*l*u)+f*(+t*c*p-t*o*m-n*s*p+i*s*m+n*o*u-i*c*u)+h*(-a*o*u-t*l*p+t*o*d+a*s*p-i*s*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=e[9],d=e[10],m=e[11],x=e[12],M=e[13],f=e[14],h=e[15],A=p*f*c-M*d*c+M*l*m-o*f*m-p*l*h+o*d*h,T=x*d*c-u*f*c-x*l*m+s*f*m+u*l*h-s*d*h,S=u*M*c-x*p*c+x*o*m-s*M*m-u*o*h+s*p*h,D=x*p*l-u*M*l-x*o*d+s*M*d+u*o*f-s*p*f,U=t*A+i*T+a*S+n*D;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/U;return e[0]=A*R,e[1]=(M*d*n-p*f*n-M*a*m+i*f*m+p*a*h-i*d*h)*R,e[2]=(o*f*n-M*l*n+M*a*c-i*f*c-o*a*h+i*l*h)*R,e[3]=(p*l*n-o*d*n-p*a*c+i*d*c+o*a*m-i*l*m)*R,e[4]=T*R,e[5]=(u*f*n-x*d*n+x*a*m-t*f*m-u*a*h+t*d*h)*R,e[6]=(x*l*n-s*f*n-x*a*c+t*f*c+s*a*h-t*l*h)*R,e[7]=(s*d*n-u*l*n+u*a*c-t*d*c-s*a*m+t*l*m)*R,e[8]=S*R,e[9]=(x*p*n-u*M*n-x*i*m+t*M*m+u*i*h-t*p*h)*R,e[10]=(s*M*n-x*o*n+x*i*c-t*M*c-s*i*h+t*o*h)*R,e[11]=(u*o*n-s*p*n-u*i*c+t*p*c+s*i*m-t*o*m)*R,e[12]=D*R,e[13]=(u*M*a-x*p*a+x*i*d-t*M*d-u*i*f+t*p*f)*R,e[14]=(x*o*a-s*M*a-x*i*l+t*M*l+s*i*f-t*o*f)*R,e[15]=(s*p*a-u*o*a+u*i*l-t*p*l-s*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,a=e.y,n=e.z;return t[0]*=i,t[4]*=a,t[8]*=n,t[1]*=i,t[5]*=a,t[9]*=n,t[2]*=i,t[6]*=a,t[10]*=n,t[3]*=i,t[7]*=a,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),n=1-i,s=e.x,o=e.y,l=e.z,c=n*s,u=n*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+i,u*l-a*s,0,c*l-a*o,u*l+a*s,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,n,s){return this.set(1,i,n,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,n=t._x,s=t._y,o=t._z,l=t._w,c=n+n,u=s+s,p=o+o,d=n*c,m=n*u,x=n*p,M=s*u,f=s*p,h=o*p,A=l*c,T=l*u,S=l*p,D=i.x,U=i.y,R=i.z;return a[0]=(1-(M+h))*D,a[1]=(m+S)*D,a[2]=(x-T)*D,a[3]=0,a[4]=(m-S)*U,a[5]=(1-(d+h))*U,a[6]=(f+A)*U,a[7]=0,a[8]=(x+T)*R,a[9]=(f-A)*R,a[10]=(1-(d+M))*R,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let n=Gi.set(a[0],a[1],a[2]).length();const s=Gi.set(a[4],a[5],a[6]).length(),o=Gi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),e.x=a[12],e.y=a[13],e.z=a[14],Nt.copy(this);const l=1/n,c=1/s,u=1/o;return Nt.elements[0]*=l,Nt.elements[1]*=l,Nt.elements[2]*=l,Nt.elements[4]*=c,Nt.elements[5]*=c,Nt.elements[6]*=c,Nt.elements[8]*=u,Nt.elements[9]*=u,Nt.elements[10]*=u,t.setFromRotationMatrix(Nt),i.x=n,i.y=s,i.z=o,this}makePerspective(e,t,i,a,n,s,o=ei){const l=this.elements,c=2*n/(t-e),u=2*n/(i-a),p=(t+e)/(t-e),d=(i+a)/(i-a);let m,x;if(o===ei)m=-(s+n)/(s-n),x=-2*s*n/(s-n);else if(o===aa)m=-s/(s-n),x=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,n,s,o=ei){const l=this.elements,c=1/(t-e),u=1/(i-a),p=1/(s-n),d=(t+e)*c,m=(i+a)*u;let x,M;if(o===ei)x=(s+n)*p,M=-2*p;else if(o===aa)x=n*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new O,Nt=new at,Ol=new O(0,0,0),Fl=new O(1,1,1),oi=new O,Dr=new O,yt=new O,cs=new at,hs=new Ui;class ri{constructor(e=0,t=0,i=0,a=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],u=a[9],p=a[2],d=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cs,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hs.setFromEuler(this),this.setFromQuaternion(hs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class uo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zl=0;const us=new O,Vi=new Ui,qt=new at,Ir=new O,fr=new O,Bl=new O,Hl=new Ui,ds=new O(1,0,0),ps=new O(0,1,0),fs=new O(0,0,1),ms={type:"added"},kl={type:"removed"},Wi={type:"childadded",child:null},ya={type:"childremoved",child:null};class bt extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new O,t=new ri,i=new Ui,a=new O(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new at},normalMatrix:{value:new Le}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(ds,e)}rotateY(e){return this.rotateOnAxis(ps,e)}rotateZ(e){return this.rotateOnAxis(fs,e)}translateOnAxis(e,t){return us.copy(e).applyQuaternion(this.quaternion),this.position.add(us.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ds,e)}translateY(e){return this.translateOnAxis(ps,e)}translateZ(e){return this.translateOnAxis(fs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ir.copy(e):Ir.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qt.lookAt(fr,Ir,this.up):qt.lookAt(Ir,fr,this.up),this.quaternion.setFromRotationMatrix(qt),a&&(qt.extractRotation(a.matrixWorld),Vi.setFromRotationMatrix(qt),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ms),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kl),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ms),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Bl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Hl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];n(e.shapes,p)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));a.material=o}else a.material=n(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(n(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),p=s(e.shapes),d=s(e.skeletons),m=s(e.animations),x=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}bt.DEFAULT_UP=new O(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new O,Kt=new O,Ta=new O,Zt=new O,Xi=new O,ji=new O,gs=new O,ba=new O,Aa=new O,wa=new O,Ra=new it,Ca=new it,Pa=new it;class Ft{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Ot.subVectors(e,t),a.cross(Ot);const n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(e,t,i,a,n){Ot.subVectors(a,t),Kt.subVectors(i,t),Ta.subVectors(e,t);const s=Ot.dot(Ot),o=Ot.dot(Kt),l=Ot.dot(Ta),c=Kt.dot(Kt),u=Kt.dot(Ta),p=s*c-o*o;if(p===0)return n.set(0,0,0),null;const d=1/p,m=(c*l-o*u)*d,x=(s*u-o*l)*d;return n.set(1-m-x,x,m)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Zt)===null?!1:Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getInterpolation(e,t,i,a,n,s,o,l){return this.getBarycoord(e,t,i,a,Zt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Zt.x),l.addScaledVector(s,Zt.y),l.addScaledVector(o,Zt.z),l)}static getInterpolatedAttribute(e,t,i,a,n,s){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(e,t),Ca.fromBufferAttribute(e,i),Pa.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Ra,n.x),s.addScaledVector(Ca,n.y),s.addScaledVector(Pa,n.z),s}static isFrontFacing(e,t,i,a){return Ot.subVectors(i,t),Kt.subVectors(e,t),Ot.cross(Kt).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),Ot.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ft.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ft.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,n){return Ft.getInterpolation(e,this.a,this.b,this.c,t,i,a,n)}containsPoint(e){return Ft.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ft.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,n=this.c;let s,o;Xi.subVectors(a,i),ji.subVectors(n,i),ba.subVectors(e,i);const l=Xi.dot(ba),c=ji.dot(ba);if(l<=0&&c<=0)return t.copy(i);Aa.subVectors(e,a);const u=Xi.dot(Aa),p=ji.dot(Aa);if(u>=0&&p<=u)return t.copy(a);const d=l*p-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(Xi,s);wa.subVectors(e,n);const m=Xi.dot(wa),x=ji.dot(wa);if(x>=0&&m<=x)return t.copy(n);const M=m*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(ji,o);const f=u*x-m*p;if(f<=0&&p-u>=0&&m-x>=0)return gs.subVectors(n,a),o=(p-u)/(p-u+(m-x)),t.copy(a).addScaledVector(gs,o);const h=1/(f+M+d);return s=M*h,o=d*h,t.copy(i).addScaledVector(Xi,s).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const po={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Ua(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Ge.workingColorSpace){if(e=yl(e,1),t=ze(t,0,1),i=ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=Ua(s,n,e+1/3),this.g=Ua(s,n,e),this.b=Ua(s,n,e-1/3)}return Ge.colorSpaceToWorking(this,a),this}setStyle(e,t=Ct){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=a[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const i=po[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ge.workingToColorSpace(mt.copy(this),e),Math.round(ze(mt.r*255,0,255))*65536+Math.round(ze(mt.g*255,0,255))*256+Math.round(ze(mt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(mt.copy(this),t);const i=mt.r,a=mt.g,n=mt.b,s=Math.max(i,a,n),o=Math.min(i,a,n);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const p=s-o;switch(c=u<=.5?p/(s+o):p/(2-s-o),s){case i:l=(a-n)/p+(a<n?6:0);break;case a:l=(n-i)/p+2;break;case n:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Ct){Ge.workingToColorSpace(mt.copy(this),e);const t=mt.r,i=mt.g,a=mt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Nr);const i=pa(li.h,Nr.h,t),a=pa(li.s,Nr.s,t),n=pa(li.l,Nr.l,t);return this.setHSL(i,a,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*a,this.g=n[1]*t+n[4]*i+n[7]*a,this.b=n[2]*t+n[5]*i+n[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new Ye;Ye.NAMES=po;let Gl=0;class oa extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=er,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Wa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=is,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Va&&(i.blendSrc=this.blendSrc),this.blendDst!==Wa&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==is&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(n){const s=[];for(const o in n){const l=n[o];delete l.metadata,s.push(l)}return s}if(t){const n=a(e.textures),s=a(e.images);n.length>0&&(i.textures=n),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let n=0;n!==a;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kn extends oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new O,Or=new Ne;let Vl=0;class Vt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vl++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rs,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,n=this.itemSize;a<n;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),a=vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),a=vt(a,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rs&&(e.usage=this.usage),e}}class fo extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mo extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ci extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wl=0;const Rt=new at,La=new bt,Yi=new O,Tt=new Tr,mr=new Tr,ut=new O;class Ni extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lo(e)?mo:fo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Le().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,i){return Rt.makeTranslation(e,t,i),this.applyMatrix4(Rt),this}scale(e,t,i){return Rt.makeScale(e,t,i),this.applyMatrix4(Rt),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,n=e.length;a<n;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ci(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const n=e[a];t.setXYZ(a,n.x,n.y,n.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const n=t[i];Tt.setFromBufferAttribute(n),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(Tt.min,mr.min),Tt.expandByPoint(ut),ut.addVectors(Tt.max,mr.max),Tt.expandByPoint(ut)):(Tt.expandByPoint(mr.min),Tt.expandByPoint(mr.max))}Tt.getCenter(i);let a=0;for(let n=0,s=e.count;n<s;n++)ut.fromBufferAttribute(e,n),a=Math.max(a,i.distanceToSquared(ut));if(t)for(let n=0,s=t.length;n<s;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ut.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(e,c),ut.add(Yi)),a=Math.max(a,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new O,l[I]=new O;const c=new O,u=new O,p=new O,d=new Ne,m=new Ne,x=new Ne,M=new O,f=new O;function h(I,E,v){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),p.fromBufferAttribute(i,v),d.fromBufferAttribute(n,I),m.fromBufferAttribute(n,E),x.fromBufferAttribute(n,v),u.sub(c),p.sub(c),m.sub(d),x.sub(d);const C=1/(m.x*x.y-x.x*m.y);isFinite(C)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(p,-m.y).multiplyScalar(C),f.copy(p).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(C),o[I].add(M),o[E].add(M),o[v].add(M),l[I].add(f),l[E].add(f),l[v].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,E=A.length;I<E;++I){const v=A[I],C=v.start,k=v.count;for(let B=C,X=C+k;B<X;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new O,S=new O,D=new O,U=new O;function R(I){D.fromBufferAttribute(a,I),U.copy(D);const E=o[I];T.copy(E),T.sub(D.multiplyScalar(D.dot(E))).normalize(),S.crossVectors(U,E);const v=S.dot(l[I])<0?-1:1;s.setXYZW(I,T.x,T.y,T.z,v)}for(let I=0,E=A.length;I<E;++I){const v=A[I],C=v.start,k=v.count;for(let B=C,X=C+k;B<X;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const a=new O,n=new O,s=new O,o=new O,l=new O,c=new O,u=new O,p=new O;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),M=e.getX(d+1),f=e.getX(d+2);a.fromBufferAttribute(t,x),n.fromBufferAttribute(t,M),s.fromBufferAttribute(t,f),u.subVectors(s,n),p.subVectors(a,n),u.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,f),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)a.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,n),p.subVectors(a,n),u.cross(p),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let M=0,f=l.length;M<f;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*u;for(let h=0;h<u;h++)d[x++]=c[m++]}return new Vt(d,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ni,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let u=0,p=c.length;u<p;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];u.push(m.toJSON(e.data))}u.length>0&&(a[l]=u,n=!0)}n&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const n=e.morphAttributes;for(const c in n){const u=[],p=n[c];for(let d=0,m=p.length;d<m;d++)u.push(p[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _s=new at,Mi=new ho,Fr=new Hn,vs=new O,zr=new O,Br=new O,Hr=new O,Da=new O,kr=new O,xs=new O,Gr=new O;class Gt extends bt{constructor(e=new Ni,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=i.length;a<n;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(n&&o){kr.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const u=o[l],p=n[l];u!==0&&(Da.fromBufferAttribute(p,e),s?kr.addScaledVector(Da,u):kr.addScaledVector(Da.sub(t),u))}t.add(kr)}return t}raycast(e,t){const i=this.geometry,a=this.material,n=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(n),Mi.copy(e.ray).recast(e.near),!(Fr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Fr,vs)===null||Mi.origin.distanceToSquared(vs)>(e.far-e.near)**2))&&(_s.copy(n).invert(),Mi.copy(e.ray).applyMatrix4(_s),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let a;const n=this.geometry,s=this.material,o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv1,p=n.attributes.normal,d=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,M=d.length;x<M;x++){const f=d[x],h=s[f.materialIndex],A=Math.max(f.start,m.start),T=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let S=A,D=T;S<D;S+=3){const U=o.getX(S),R=o.getX(S+1),I=o.getX(S+2);a=Vr(this,h,e,i,c,u,p,U,R,I),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const x=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let f=x,h=M;f<h;f+=3){const A=o.getX(f),T=o.getX(f+1),S=o.getX(f+2);a=Vr(this,s,e,i,c,u,p,A,T,S),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,M=d.length;x<M;x++){const f=d[x],h=s[f.materialIndex],A=Math.max(f.start,m.start),T=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let S=A,D=T;S<D;S+=3){const U=S,R=S+1,I=S+2;a=Vr(this,h,e,i,c,u,p,U,R,I),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=f.materialIndex,t.push(a))}}else{const x=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let f=x,h=M;f<h;f+=3){const A=f,T=f+1,S=f+2;a=Vr(this,s,e,i,c,u,p,A,T,S),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}}}function Xl(r,e,t,i,a,n,s,o){let l;if(e.side===Mt?l=i.intersectTriangle(s,n,a,!0,o):l=i.intersectTriangle(a,n,s,e.side===fi,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:r}}function Vr(r,e,t,i,a,n,s,o,l,c){r.getVertexPosition(o,zr),r.getVertexPosition(l,Br),r.getVertexPosition(c,Hr);const u=Xl(r,e,t,i,zr,Br,Hr,xs);if(u){const p=new O;Ft.getBarycoord(xs,zr,Br,Hr,p),a&&(u.uv=Ft.getInterpolatedAttribute(a,o,l,c,p,new Ne)),n&&(u.uv1=Ft.getInterpolatedAttribute(n,o,l,c,p,new Ne)),s&&(u.normal=Ft.getInterpolatedAttribute(s,o,l,c,p,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};Ft.getNormal(zr,Br,Hr,d.normal),u.face=d,u.barycoord=p}return u}class lr extends Ni{constructor(e=1,t=1,i=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:n,depthSegments:s};const o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],p=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,s,n,0),x("z","y","x",1,-1,i,t,-e,s,n,1),x("x","z","y",1,1,e,i,t,a,s,2),x("x","z","y",1,-1,e,i,-t,a,s,3),x("x","y","z",1,-1,e,t,i,a,n,4),x("x","y","z",-1,-1,e,t,-i,a,n,5),this.setIndex(l),this.setAttribute("position",new Ci(c,3)),this.setAttribute("normal",new Ci(u,3)),this.setAttribute("uv",new Ci(p,2));function x(M,f,h,A,T,S,D,U,R,I,E){const v=S/R,C=D/I,k=S/2,B=D/2,X=U/2,Q=R+1,W=I+1;let ee=0,H=0;const ie=new O;for(let fe=0;fe<W;fe++){const Re=fe*C-B;for(let Fe=0;Fe<Q;Fe++){const qe=Fe*v-k;ie[M]=qe*A,ie[f]=Re*T,ie[h]=X,c.push(ie.x,ie.y,ie.z),ie[M]=0,ie[f]=0,ie[h]=U>0?1:-1,u.push(ie.x,ie.y,ie.z),p.push(Fe/R),p.push(1-fe/I),ee+=1}}for(let fe=0;fe<I;fe++)for(let Re=0;Re<R;Re++){const Fe=d+Re+Q*fe,qe=d+Re+Q*(fe+1),j=d+(Re+1)+Q*(fe+1),te=d+(Re+1)+Q*fe;l.push(Fe,qe,te),l.push(qe,j,te),H+=6}o.addGroup(m,H,E),m+=H,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function _t(r){const e={};for(let t=0;t<r.length;t++){const i=or(r[t]);for(const a in i)e[a]=i[a]}return e}function jl(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function go(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Yl={clone:or,merge:_t};var ql=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ql,this.fragmentShader=Kl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=jl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const n=this.uniforms[a].value;n&&n.isTexture?t.uniforms[a]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[a]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[a]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[a]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[a]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[a]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[a]={type:"m4",value:n.toArray()}:t.uniforms[a]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _o extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new O,Ms=new Ne,Es=new Ne;class Pt extends _o{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cn*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Ms,Es),t.subVectors(Es,Ms)}setViewOffset(e,t,i,a,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ta*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,n=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;n+=s.offsetX*a/l,t-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Ki=1;class Zl extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Pt(qi,Ki,e,t);a.layers=this.layers,this.add(a);const n=new Pt(qi,Ki,e,t);n.layers=this.layers,this.add(n);const s=new Pt(qi,Ki,e,t);s.layers=this.layers,this.add(s);const o=new Pt(qi,Ki,e,t);o.layers=this.layers,this.add(o);const l=new Pt(qi,Ki,e,t);l.layers=this.layers,this.add(l);const c=new Pt(qi,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,n,s,o,l]=t;for(const c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,s,o,l,c,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,n),e.setRenderTarget(i,1,a),e.render(t,s),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,a),e.render(t,u),e.setRenderTarget(p,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class vo extends Et{constructor(e=[],t=ar,i,a,n,s,o,l,c,u){super(e,t,i,a,n,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jl extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new vo(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new lr(5,5,5),n=new mi({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mt,blending:di});n.uniforms.tEquirect.value=t;const s=new Gt(a,n),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=kt),new Zl(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(n)}}class Wr extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $l={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,n=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const M of e.hand.values()){const f=t.getJointPose(M,i),h=this._getHandJoint(c,M);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&n!==null&&(a=n),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($l)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ql extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Na=new O,ec=new O,tc=new Le;class hi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Na.subVectors(i,t).cross(ec.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Na),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/a;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tc.getNormalMatrix(e),a=this.coplanarPoint(Na).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Hn,ic=new Ne(.5,.5),Xr=new O;class xo{constructor(e=new hi,t=new hi,i=new hi,a=new hi,n=new hi,s=new hi){this.planes=[e,t,i,a,n,s]}set(e,t,i,a,n,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(n),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){const i=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],u=a[5],p=a[6],d=a[7],m=a[8],x=a[9],M=a[10],f=a[11],h=a[12],A=a[13],T=a[14],S=a[15];if(i[0].setComponents(l-n,d-c,f-m,S-h).normalize(),i[1].setComponents(l+n,d+c,f+m,S+h).normalize(),i[2].setComponents(l+s,d+u,f+x,S+A).normalize(),i[3].setComponents(l-s,d-u,f-x,S-A).normalize(),i[4].setComponents(l-o,d-p,f-M,S-T).normalize(),t===ei)i[5].setComponents(l+o,d+p,f+M,S+T).normalize();else if(t===aa)i[5].setComponents(o,p,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);const t=ic.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Xr.x=a.normal.x>0?e.max.x:e.min.x,Xr.y=a.normal.y>0?e.max.y:e.min.y,Xr.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mo extends Et{constructor(e,t,i=Pi,a,n,s,o=Bt,l=Bt,c,u=xr,p=1){if(u!==xr&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:p};super(d,a,n,s,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class la extends Ni{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const n=e/2,s=t/2,o=Math.floor(i),l=Math.floor(a),c=o+1,u=l+1,p=e/o,d=t/l,m=[],x=[],M=[],f=[];for(let h=0;h<u;h++){const A=h*d-s;for(let T=0;T<c;T++){const S=T*p-n;x.push(S,-A,0),M.push(0,0,1),f.push(T/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<o;A++){const T=A+c*h,S=A+c*(h+1),D=A+1+c*(h+1),U=A+1+c*h;m.push(T,S,U),m.push(S,D,U)}this.setIndex(m),this.setAttribute("position",new Ci(x,3)),this.setAttribute("normal",new Ci(M,3)),this.setAttribute("uv",new Ci(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.widthSegments,e.heightSegments)}}class rc extends oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ac extends oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nc extends _o{constructor(e=-1,t=1,i=1,a=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let n=i-e,s=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,s=n+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sc extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ss{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class oc extends Ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ys(r,e,t,i){const a=lc(i);switch(t){case io:return r*e;case ao:return r*e/a.components*a.byteLength;case On:return r*e/a.components*a.byteLength;case no:return r*e*2/a.components*a.byteLength;case Fn:return r*e*2/a.components*a.byteLength;case ro:return r*e*3/a.components*a.byteLength;case zt:return r*e*4/a.components*a.byteLength;case zn:return r*e*4/a.components*a.byteLength;case Zr:case Jr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $r:case Qr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case an:case sn:return Math.max(r,16)*Math.max(e,8)/4;case rn:case nn:return Math.max(r,8)*Math.max(e,8)/2;case on:case ln:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case un:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case dn:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case pn:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case fn:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case mn:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case gn:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case _n:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case vn:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case xn:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Mn:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case En:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Sn:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case yn:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ea:case Tn:case bn:return Math.ceil(r/4)*Math.ceil(e/4)*16;case so:case An:return Math.ceil(r/4)*Math.ceil(e/4)*8;case wn:case Rn:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lc(r){switch(r){case ii:case Qs:return{byteLength:1,components:1};case _r:case eo:case Sr:return{byteLength:2,components:1};case In:case Nn:return{byteLength:2,components:4};case Pi:case Dn:case Qt:return{byteLength:4,components:1};case to:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ln}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ln);/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/function Eo(){let r=null,e=!1,t=null,i=null;function a(n,s){t(n,s),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function cc(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,p=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const u=l.array,p=l.updateRanges;if(r.bindBuffer(c,o),p.length===0)r.bufferSubData(c,0,u);else{p.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<p.length;m++){const x=p[d],M=p[m];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++d,p[d]=M)}p.length=d+1;for(let m=0,x=p.length;m<x;m++){const M=p[m];r.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}var hc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_c=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ec=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ac=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ic=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Oc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hc="gl_FragColor = linearToOutputTexel( gl_FragColor );",kc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$c=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,th=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ih=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ah=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ch=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ph=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_h=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Th=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ah=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ph=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ih=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$h=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ru=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,au=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,du=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_u=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Su=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Au=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ru=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Iu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ou=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ku=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:hc,alphahash_pars_fragment:uc,alphamap_fragment:dc,alphamap_pars_fragment:pc,alphatest_fragment:fc,alphatest_pars_fragment:mc,aomap_fragment:gc,aomap_pars_fragment:_c,batching_pars_vertex:vc,batching_vertex:xc,begin_vertex:Mc,beginnormal_vertex:Ec,bsdfs:Sc,iridescence_fragment:yc,bumpmap_pars_fragment:Tc,clipping_planes_fragment:bc,clipping_planes_pars_fragment:Ac,clipping_planes_pars_vertex:wc,clipping_planes_vertex:Rc,color_fragment:Cc,color_pars_fragment:Pc,color_pars_vertex:Uc,color_vertex:Lc,common:Dc,cube_uv_reflection_fragment:Ic,defaultnormal_vertex:Nc,displacementmap_pars_vertex:Oc,displacementmap_vertex:Fc,emissivemap_fragment:zc,emissivemap_pars_fragment:Bc,colorspace_fragment:Hc,colorspace_pars_fragment:kc,envmap_fragment:Gc,envmap_common_pars_fragment:Vc,envmap_pars_fragment:Wc,envmap_pars_vertex:Xc,envmap_physical_pars_fragment:ih,envmap_vertex:jc,fog_vertex:Yc,fog_pars_vertex:qc,fog_fragment:Kc,fog_pars_fragment:Zc,gradientmap_pars_fragment:Jc,lightmap_pars_fragment:$c,lights_lambert_fragment:Qc,lights_lambert_pars_fragment:eh,lights_pars_begin:th,lights_toon_fragment:rh,lights_toon_pars_fragment:ah,lights_phong_fragment:nh,lights_phong_pars_fragment:sh,lights_physical_fragment:oh,lights_physical_pars_fragment:lh,lights_fragment_begin:ch,lights_fragment_maps:hh,lights_fragment_end:uh,logdepthbuf_fragment:dh,logdepthbuf_pars_fragment:ph,logdepthbuf_pars_vertex:fh,logdepthbuf_vertex:mh,map_fragment:gh,map_pars_fragment:_h,map_particle_fragment:vh,map_particle_pars_fragment:xh,metalnessmap_fragment:Mh,metalnessmap_pars_fragment:Eh,morphinstance_vertex:Sh,morphcolor_vertex:yh,morphnormal_vertex:Th,morphtarget_pars_vertex:bh,morphtarget_vertex:Ah,normal_fragment_begin:wh,normal_fragment_maps:Rh,normal_pars_fragment:Ch,normal_pars_vertex:Ph,normal_vertex:Uh,normalmap_pars_fragment:Lh,clearcoat_normal_fragment_begin:Dh,clearcoat_normal_fragment_maps:Ih,clearcoat_pars_fragment:Nh,iridescence_pars_fragment:Oh,opaque_fragment:Fh,packing:zh,premultiplied_alpha_fragment:Bh,project_vertex:Hh,dithering_fragment:kh,dithering_pars_fragment:Gh,roughnessmap_fragment:Vh,roughnessmap_pars_fragment:Wh,shadowmap_pars_fragment:Xh,shadowmap_pars_vertex:jh,shadowmap_vertex:Yh,shadowmask_pars_fragment:qh,skinbase_vertex:Kh,skinning_pars_vertex:Zh,skinning_vertex:Jh,skinnormal_vertex:$h,specularmap_fragment:Qh,specularmap_pars_fragment:eu,tonemapping_fragment:tu,tonemapping_pars_fragment:iu,transmission_fragment:ru,transmission_pars_fragment:au,uv_pars_fragment:nu,uv_pars_vertex:su,uv_vertex:ou,worldpos_vertex:lu,background_vert:cu,background_frag:hu,backgroundCube_vert:uu,backgroundCube_frag:du,cube_vert:pu,cube_frag:fu,depth_vert:mu,depth_frag:gu,distanceRGBA_vert:_u,distanceRGBA_frag:vu,equirect_vert:xu,equirect_frag:Mu,linedashed_vert:Eu,linedashed_frag:Su,meshbasic_vert:yu,meshbasic_frag:Tu,meshlambert_vert:bu,meshlambert_frag:Au,meshmatcap_vert:wu,meshmatcap_frag:Ru,meshnormal_vert:Cu,meshnormal_frag:Pu,meshphong_vert:Uu,meshphong_frag:Lu,meshphysical_vert:Du,meshphysical_frag:Iu,meshtoon_vert:Nu,meshtoon_frag:Ou,points_vert:Fu,points_frag:zu,shadow_vert:Bu,shadow_frag:Hu,sprite_vert:ku,sprite_frag:Gu},ae={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Ht={basic:{uniforms:_t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:_t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:_t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:_t([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:_t([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:_t([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:_t([ae.points,ae.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:_t([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:_t([ae.common,ae.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:_t([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:_t([ae.sprite,ae.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:_t([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:_t([ae.lights,ae.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Ht.physical={uniforms:_t([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const jr={r:0,b:0,g:0},Si=new ri,Vu=new at;function Wu(r,e,t,i,a,n,s){const o=new Ye(0);let l=n===!0?0:1,c,u,p=null,d=0,m=null;function x(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function M(T){let S=!1;const D=x(T);D===null?h(o,l):D&&D.isColor&&(h(D,1),S=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(T,S){const D=x(S);D&&(D.isCubeTexture||D.mapping===sa)?(u===void 0&&(u=new Gt(new lr(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:or(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),Si.copy(S.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vu.makeRotationFromEuler(Si)),u.material.toneMapped=Ge.getTransfer(D.colorSpace)!==Xe,(p!==D||d!==D.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,p=D,d=D.version,m=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Gt(new la(2,2),new mi({name:"BackgroundMaterial",uniforms:or(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(D.colorSpace)!==Xe,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(p!==D||d!==D.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,p=D,d=D.version,m=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,S){T.getRGB(jr,go(r)),i.buffers.color.setClear(jr.r,jr.g,jr.b,S,s)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:M,addToRenderList:f,dispose:A}}function Xu(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=d(null);let n=a,s=!1;function o(v,C,k,B,X){let Q=!1;const W=p(B,k,C);n!==W&&(n=W,c(n.object)),Q=m(v,B,k,X),Q&&x(v,B,k,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(Q||s)&&(s=!1,S(v,C,k,B),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function p(v,C,k){const B=k.wireframe===!0;let X=i[v.id];X===void 0&&(X={},i[v.id]=X);let Q=X[C.id];Q===void 0&&(Q={},X[C.id]=Q);let W=Q[B];return W===void 0&&(W=d(l()),Q[B]=W),W}function d(v){const C=[],k=[],B=[];for(let X=0;X<t;X++)C[X]=0,k[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:B,object:v,attributes:{},index:null}}function m(v,C,k,B){const X=n.attributes,Q=C.attributes;let W=0;const ee=k.getAttributes();for(const H in ee)if(ee[H].location>=0){const ie=X[H];let fe=Q[H];if(fe===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),ie===void 0||ie.attribute!==fe||fe&&ie.data!==fe.data)return!0;W++}return n.attributesNum!==W||n.index!==B}function x(v,C,k,B){const X={},Q=C.attributes;let W=0;const ee=k.getAttributes();for(const H in ee)if(ee[H].location>=0){let ie=Q[H];ie===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor));const fe={};fe.attribute=ie,ie&&ie.data&&(fe.data=ie.data),X[H]=fe,W++}n.attributes=X,n.attributesNum=W,n.index=B}function M(){const v=n.newAttributes;for(let C=0,k=v.length;C<k;C++)v[C]=0}function f(v){h(v,0)}function h(v,C){const k=n.newAttributes,B=n.enabledAttributes,X=n.attributeDivisors;k[v]=1,B[v]===0&&(r.enableVertexAttribArray(v),B[v]=1),X[v]!==C&&(r.vertexAttribDivisor(v,C),X[v]=C)}function A(){const v=n.newAttributes,C=n.enabledAttributes;for(let k=0,B=C.length;k<B;k++)C[k]!==v[k]&&(r.disableVertexAttribArray(k),C[k]=0)}function T(v,C,k,B,X,Q,W){W===!0?r.vertexAttribIPointer(v,C,k,X,Q):r.vertexAttribPointer(v,C,k,B,X,Q)}function S(v,C,k,B){M();const X=B.attributes,Q=k.getAttributes(),W=C.defaultAttributeValues;for(const ee in Q){const H=Q[ee];if(H.location>=0){let ie=X[ee];if(ie===void 0&&(ee==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),ee==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor)),ie!==void 0){const fe=ie.normalized,Re=ie.itemSize,Fe=e.get(ie);if(Fe===void 0)continue;const qe=Fe.buffer,j=Fe.type,te=Fe.bytesPerElement,xe=j===r.INT||j===r.UNSIGNED_INT||ie.gpuType===Dn;if(ie.isInterleavedBufferAttribute){const oe=ie.data,Me=oe.stride,Ce=ie.offset;if(oe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)h(H.location+Oe,oe.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)f(H.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let Oe=0;Oe<H.locationSize;Oe++)T(H.location+Oe,Re/H.locationSize,j,fe,Me*te,(Ce+Re/H.locationSize*Oe)*te,xe)}else{if(ie.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)h(H.location+oe,ie.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let oe=0;oe<H.locationSize;oe++)f(H.location+oe);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let oe=0;oe<H.locationSize;oe++)T(H.location+oe,Re/H.locationSize,j,fe,Re*te,Re/H.locationSize*oe*te,xe)}}else if(W!==void 0){const fe=W[ee];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(H.location,fe);break;case 3:r.vertexAttrib3fv(H.location,fe);break;case 4:r.vertexAttrib4fv(H.location,fe);break;default:r.vertexAttrib1fv(H.location,fe)}}}}A()}function D(){I();for(const v in i){const C=i[v];for(const k in C){const B=C[k];for(const X in B)u(B[X].object),delete B[X];delete C[k]}delete i[v]}}function U(v){if(i[v.id]===void 0)return;const C=i[v.id];for(const k in C){const B=C[k];for(const X in B)u(B[X].object),delete B[X];delete C[k]}delete i[v.id]}function R(v){for(const C in i){const k=i[C];if(k[v.id]===void 0)continue;const B=k[v.id];for(const X in B)u(B[X].object),delete B[X];delete k[v.id]}}function I(){E(),s=!0,n!==a&&(n=a,c(n.object))}function E(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:f,disableUnusedAttributes:A}}function ju(r,e,t){let i;function a(c){i=c}function n(c,u){r.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,p){p!==0&&(r.drawArraysInstanced(i,c,u,p),t.update(u,i,p))}function o(c,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,p);let d=0;for(let m=0;m<p;m++)d+=u[m];t.update(d,i,1)}function l(c,u,p,d){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)s(c[x],u[x],d[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,p);let x=0;for(let M=0;M<p;M++)x+=u[M]*d[M];t.update(x,i,1)}}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yu(r,e,t,i){let a;function n(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==zt&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ii&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qt&&!I)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),h=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=x>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:D,maxSamples:U}}function qu(r){const e=this;let t=null,i=0,a=!1,n=!1;const s=new hi,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||a;return a=d,i=p.length,m},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,m){const x=p.clippingPlanes,M=p.clipIntersection,f=p.clipShadows,h=r.get(p);if(!a||x===null||x.length===0||n&&!f)n?u(null):c();else{const A=n?0:i,T=A*4;let S=h.clippingState||null;l.value=S,S=u(x,d,T,m);for(let D=0;D!==T;++D)S[D]=t[D];h.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,d,m,x){const M=p!==null?p.length:0;let f=null;if(M!==0){if(f=l.value,x!==!0||f===null){const h=m+M*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(f===null||f.length<h)&&(f=new Float32Array(h));for(let T=0,S=m;T!==M;++T,S+=4)s.copy(p[T]).applyMatrix4(A,o),s.normal.toArray(f,S),f[S+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,f}}function Ku(r){let e=new WeakMap;function t(s,o){return o===$a?s.mapping=ar:o===Qa&&(s.mapping=nr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===$a||o===Qa)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Jl(l.height);return c.fromEquirectangularTexture(r,s),e.set(s,c),s.addEventListener("dispose",a),t(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}const $i=4,Ts=[.125,.215,.35,.446,.526,.582],Ai=20,Oa=new nc,bs=new Ye;let Fa=null,za=0,Ba=0,Ha=!1;const Ti=(1+Math.sqrt(5))/2,Zi=1/Ti,As=[new O(-Ti,Zi,0),new O(Ti,Zi,0),new O(-Zi,0,Ti),new O(Zi,0,Ti),new O(0,Ti,-Zi),new O(0,Ti,Zi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Zu=new O;class ws{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100,n={}){const{size:s=256,position:o=Zu}=n;Fa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ps(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fa,za,Ba),this._renderer.xr.enabled=Ha,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Sr,format:zt,colorSpace:sr,depthBuffer:!1},a=Rs(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rs(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ju(n)),this._blurMaterial=$u(n,e,t)}return a}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,i,a,n){const s=new Pt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,p=c.toneMapping;c.getClearColor(bs),c.toneMapping=pi,c.autoClear=!1;const d=new kn({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),m=new Gt(new lr,d);let x=!1;const M=e.background;M?M.isColor&&(d.color.copy(M),e.background=null,x=!0):(d.color.copy(bs),x=!0);for(let f=0;f<6;f++){const h=f%3;h===0?(s.up.set(0,o[f],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x+l[f],n.y,n.z)):h===1?(s.up.set(0,0,o[f]),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y+l[f],n.z)):(s.up.set(0,o[f],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y,n.z+l[f]));const A=this._cubeSize;Yr(a,h*A,f>2?A:0,A,A),c.setRenderTarget(a),x&&c.render(m,s),c.render(e,s)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=p,c.autoClear=u,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ar||e.mapping===nr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ps()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cs());const n=a?this._cubemapMaterial:this._equirectMaterial,s=new Gt(this._lodPlanes[0],n),o=n.uniforms;o.envMap.value=e;const l=this._cubeSize;Yr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let n=1;n<a;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=As[(a-n-1)%As.length];this._blur(e,n-1,n,s,o)}t.autoClear=i}_blur(e,t,i,a,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,a,"latitudinal",n),this._halfBlur(s,e,i,i,a,"longitudinal",n)}_halfBlur(e,t,i,a,n,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Gt(this._lodPlanes[a],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(n)?Math.PI/(2*m):2*Math.PI/(2*Ai-1),M=n/x,f=isFinite(n)?1+Math.floor(u*M):Ai;f>Ai&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ai}`);const h=[];let A=0;for(let R=0;R<Ai;++R){const I=R/M,E=Math.exp(-I*I/2);h.push(E),R===0?A+=E:R<f&&(A+=2*E)}for(let R=0;R<h.length;R++)h[R]=h[R]/A;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=h,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=x,d.mipInt.value=T-i;const S=this._sizeLods[a],D=3*S*(a>T-$i?a-T+$i:0),U=4*(this._cubeSize-S);Yr(t,D,U,3*S,2*S),l.setRenderTarget(t),l.render(p,Oa)}}function Ju(r){const e=[],t=[],i=[];let a=r;const n=r-$i+1+Ts.length;for(let s=0;s<n;s++){const o=Math.pow(2,a);t.push(o);let l=1/o;s>r-$i?l=Ts[s-r+$i-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,p=1+c,d=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,x=6,M=3,f=2,h=1,A=new Float32Array(M*x*m),T=new Float32Array(f*x*m),S=new Float32Array(h*x*m);for(let U=0;U<m;U++){const R=U%3*2/3-1,I=U>2?0:-1,E=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];A.set(E,M*x*U),T.set(d,f*x*U);const v=[U,U,U,U,U,U];S.set(v,h*x*U)}const D=new Ni;D.setAttribute("position",new Vt(A,M)),D.setAttribute("uv",new Vt(T,f)),D.setAttribute("faceIndex",new Vt(S,h)),e.push(D),a>$i&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rs(r,e,t){const i=new Li(r,e,t);return i.texture.mapping=sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yr(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function $u(r,e,t){const i=new Float32Array(Ai),a=new O(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Gn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Cs(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ps(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Gn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qu(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===$a||l===Qa,u=l===ar||l===nr;if(c||u){let p=e.get(o);const d=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ws(r)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&a(m)?(t===null&&(t=new ws(r)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",n),p.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function n(o){const l=o.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function ed(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&tr("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function td(r,e,t,i){const a={},n=new WeakMap;function s(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",s),delete a[d.id];const m=n.get(d);m&&(e.remove(m),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function l(p){const d=p.attributes;for(const m in d)e.update(d[m],r.ARRAY_BUFFER)}function c(p){const d=[],m=p.index,x=p.attributes.position;let M=0;if(m!==null){const A=m.array;M=m.version;for(let T=0,S=A.length;T<S;T+=3){const D=A[T+0],U=A[T+1],R=A[T+2];d.push(D,U,U,R,R,D)}}else if(x!==void 0){const A=x.array;M=x.version;for(let T=0,S=A.length/3-1;T<S;T+=3){const D=T+0,U=T+1,R=T+2;d.push(D,U,U,R,R,D)}}else return;const f=new(lo(d)?mo:fo)(d,1);f.version=M;const h=n.get(p);h&&e.remove(h),n.set(p,f)}function u(p){const d=n.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return n.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function id(r,e,t){let i;function a(d){i=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,m){r.drawElements(i,m,n,d*s),t.update(m,i,1)}function c(d,m,x){x!==0&&(r.drawElementsInstanced(i,m,n,d*s,x),t.update(m,i,x))}function u(d,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,n,d,0,x);let M=0;for(let f=0;f<x;f++)M+=m[f];t.update(M,i,1)}function p(d,m,x,M){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<d.length;h++)c(d[h]/s,m[h],M[h]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,n,d,0,M,0,x);let h=0;for(let A=0;A<x;A++)h+=m[A]*M[A];t.update(h,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function rd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(n/3);break;case r.LINES:t.lines+=o*(n/2);break;case r.LINE_STRIP:t.lines+=o*(n-1);break;case r.LINE_LOOP:t.lines+=o*n;break;case r.POINTS:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function ad(r,e,t){const i=new WeakMap,a=new it;function n(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let m=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",m)};d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),M===!0&&(S=2),f===!0&&(S=3);let D=o.attributes.position.count*S,U=1;D>e.maxTextureSize&&(U=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const R=new Float32Array(D*U*4*p),I=new co(R,D,U,p);I.type=Qt,I.needsUpdate=!0;const E=S*4;for(let v=0;v<p;v++){const C=h[v],k=A[v],B=T[v],X=D*U*4*v;for(let Q=0;Q<C.count;Q++){const W=Q*E;x===!0&&(a.fromBufferAttribute(C,Q),R[X+W+0]=a.x,R[X+W+1]=a.y,R[X+W+2]=a.z,R[X+W+3]=0),M===!0&&(a.fromBufferAttribute(k,Q),R[X+W+4]=a.x,R[X+W+5]=a.y,R[X+W+6]=a.z,R[X+W+7]=0),f===!0&&(a.fromBufferAttribute(B,Q),R[X+W+8]=a.x,R[X+W+9]=a.y,R[X+W+10]=a.z,R[X+W+11]=B.itemSize===4?a.w:1)}}d={count:p,texture:I,size:new Ne(D,U)},i.set(o,d),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:n}}function nd(r,e,t,i){let a=new WeakMap;function n(l){const c=i.render.frame,u=l.geometry,p=e.get(l,u);if(a.get(p)!==c&&(e.update(p),a.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;a.get(d)!==c&&(d.update(),a.set(d,c))}return p}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:s}}const So=new Et,Us=new Mo(1,1),yo=new co,To=new Il,bo=new vo,Ls=[],Ds=[],Is=new Float32Array(16),Ns=new Float32Array(9),Os=new Float32Array(4);function cr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let n=Ls[a];if(n===void 0&&(n=new Float32Array(a),Ls[a]=n),e!==0){i.toArray(n,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(n,o)}return n}function ot(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function lt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ca(r,e){let t=Ds[e];t===void 0&&(t=new Int32Array(e),Ds[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function sd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2fv(this.addr,e),lt(t,e)}}function ld(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;r.uniform3fv(this.addr,e),lt(t,e)}}function cd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4fv(this.addr,e),lt(t,e)}}function hd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,i))return;Os.set(i),r.uniformMatrix2fv(this.addr,!1,Os),lt(t,i)}}function ud(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,i))return;Ns.set(i),r.uniformMatrix3fv(this.addr,!1,Ns),lt(t,i)}}function dd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,i))return;Is.set(i),r.uniformMatrix4fv(this.addr,!1,Is),lt(t,i)}}function pd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2iv(this.addr,e),lt(t,e)}}function md(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3iv(this.addr,e),lt(t,e)}}function gd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4iv(this.addr,e),lt(t,e)}}function _d(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2uiv(this.addr,e),lt(t,e)}}function xd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3uiv(this.addr,e),lt(t,e)}}function Md(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4uiv(this.addr,e),lt(t,e)}}function Ed(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let n;this.type===r.SAMPLER_2D_SHADOW?(Us.compareFunction=oo,n=Us):n=So,t.setTexture2D(e||n,a)}function Sd(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||To,a)}function yd(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||bo,a)}function Td(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||yo,a)}function bd(r){switch(r){case 5126:return sd;case 35664:return od;case 35665:return ld;case 35666:return cd;case 35674:return hd;case 35675:return ud;case 35676:return dd;case 5124:case 35670:return pd;case 35667:case 35671:return fd;case 35668:case 35672:return md;case 35669:case 35673:return gd;case 5125:return _d;case 36294:return vd;case 36295:return xd;case 36296:return Md;case 35678:case 36198:case 36298:case 36306:case 35682:return Ed;case 35679:case 36299:case 36307:return Sd;case 35680:case 36300:case 36308:case 36293:return yd;case 36289:case 36303:case 36311:case 36292:return Td}}function Ad(r,e){r.uniform1fv(this.addr,e)}function wd(r,e){const t=cr(e,this.size,2);r.uniform2fv(this.addr,t)}function Rd(r,e){const t=cr(e,this.size,3);r.uniform3fv(this.addr,t)}function Cd(r,e){const t=cr(e,this.size,4);r.uniform4fv(this.addr,t)}function Pd(r,e){const t=cr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ud(r,e){const t=cr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ld(r,e){const t=cr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Dd(r,e){r.uniform1iv(this.addr,e)}function Id(r,e){r.uniform2iv(this.addr,e)}function Nd(r,e){r.uniform3iv(this.addr,e)}function Od(r,e){r.uniform4iv(this.addr,e)}function Fd(r,e){r.uniform1uiv(this.addr,e)}function zd(r,e){r.uniform2uiv(this.addr,e)}function Bd(r,e){r.uniform3uiv(this.addr,e)}function Hd(r,e){r.uniform4uiv(this.addr,e)}function kd(r,e,t){const i=this.cache,a=e.length,n=ca(t,a);ot(i,n)||(r.uniform1iv(this.addr,n),lt(i,n));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||So,n[s])}function Gd(r,e,t){const i=this.cache,a=e.length,n=ca(t,a);ot(i,n)||(r.uniform1iv(this.addr,n),lt(i,n));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||To,n[s])}function Vd(r,e,t){const i=this.cache,a=e.length,n=ca(t,a);ot(i,n)||(r.uniform1iv(this.addr,n),lt(i,n));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||bo,n[s])}function Wd(r,e,t){const i=this.cache,a=e.length,n=ca(t,a);ot(i,n)||(r.uniform1iv(this.addr,n),lt(i,n));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||yo,n[s])}function Xd(r){switch(r){case 5126:return Ad;case 35664:return wd;case 35665:return Rd;case 35666:return Cd;case 35674:return Pd;case 35675:return Ud;case 35676:return Ld;case 5124:case 35670:return Dd;case 35667:case 35671:return Id;case 35668:case 35672:return Nd;case 35669:case 35673:return Od;case 5125:return Fd;case 36294:return zd;case 36295:return Bd;case 36296:return Hd;case 35678:case 36198:case 36298:case 36306:case 35682:return kd;case 35679:case 36299:case 36307:return Gd;case 35680:case 36300:case 36308:case 36293:return Vd;case 36289:case 36303:case 36311:case 36292:return Wd}}class jd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bd(t.type)}}class Yd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xd(t.type)}}class qd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let n=0,s=a.length;n!==s;++n){const o=a[n];o.setValue(e,t[o.id],i)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function Fs(r,e){r.seq.push(e),r.map[e.id]=e}function Kd(r,e,t){const i=r.name,a=i.length;for(ka.lastIndex=0;;){const n=ka.exec(i),s=ka.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Fs(t,c===void 0?new jd(o,r,e):new Yd(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new qd(o),Fs(t,u)),t=u}}}class ia{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const n=e.getActiveUniform(t,a),s=e.getUniformLocation(t,n.name);Kd(n,s,this)}}setValue(e,t,i,a){const n=this.map[t];n!==void 0&&n.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let n=0,s=t.length;n!==s;++n){const o=t[n],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,n=e.length;a!==n;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function zs(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Zd=37297;let Jd=0;function $d(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=a;s<n;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Bs=new Le;function Qd(r){Ge._getMatrix(Bs,Ge.workingColorSpace,r);const e=`mat3( ${Bs.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(r)){case ra:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Hs(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(i&&a==="")return"";const n=/ERROR: 0:(\d+)/.exec(a);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+a+`

`+$d(r.getShaderSource(e),s)}else return a}function ep(r,e){const t=Qd(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tp(r,e){let t;switch(e){case al:t="Linear";break;case nl:t="Reinhard";break;case sl:t="Cineon";break;case ol:t="ACESFilmic";break;case cl:t="AgX";break;case hl:t="Neutral";break;case ll:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new O;function ip(){Ge.getLuminanceCoefficients(qr);const r=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rp(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function ap(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function np(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const n=r.getActiveAttrib(e,a),s=n.name;let o=1;n.type===r.FLOAT_MAT2&&(o=2),n.type===r.FLOAT_MAT3&&(o=3),n.type===r.FLOAT_MAT4&&(o=4),t[s]={type:n.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function gr(r){return r!==""}function ks(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gs(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pn(r){return r.replace(sp,lp)}const op=new Map;function lp(r,e){let t=Ie[e];if(t===void 0){const i=op.get(e);if(i!==void 0)t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pn(t)}const cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vs(r){return r.replace(cp,hp)}function hp(r,e,t,i){let a="";for(let n=parseInt(e);n<parseInt(t);n++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Ws(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function up(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zs?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Jt&&(e="SHADOWMAP_TYPE_VSM"),e}function dp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ar:case nr:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function fp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Js:e="ENVMAP_BLENDING_MULTIPLY";break;case il:e="ENVMAP_BLENDING_MIX";break;case rl:e="ENVMAP_BLENDING_ADD";break}return e}function mp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gp(r,e,t,i){const a=r.getContext(),n=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=up(t),c=dp(t),u=pp(t),p=fp(t),d=mp(t),m=rp(t),x=ap(n),M=a.createProgram();let f,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(gr).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(gr).join(`
`),h.length>0&&(h+=`
`)):(f=[Ws(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),h=[Ws(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ie.tonemapping_pars_fragment:"",t.toneMapping!==pi?tp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,ep("linearToOutputTexel",t.outputColorSpace),ip(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),s=Pn(s),s=ks(s,t),s=Gs(s,t),o=Pn(o),o=ks(o,t),o=Gs(o,t),s=Vs(s),o=Vs(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===as?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===as?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+f+s,S=A+h+o,D=zs(a,a.VERTEX_SHADER,T),U=zs(a,a.FRAGMENT_SHADER,S);a.attachShader(M,D),a.attachShader(M,U),t.index0AttributeName!==void 0?a.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function R(C){if(r.debug.checkShaderErrors){const k=a.getProgramInfoLog(M).trim(),B=a.getShaderInfoLog(D).trim(),X=a.getShaderInfoLog(U).trim();let Q=!0,W=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,M,D,U);else{const ee=Hs(a,D,"vertex"),H=Hs(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+ee+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||X==="")&&(W=!1);W&&(C.diagnostics={runnable:Q,programLog:k,vertexShader:{log:B,prefix:f},fragmentShader:{log:X,prefix:h}})}a.deleteShader(D),a.deleteShader(U),I=new ia(a,M),E=np(a,M)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=a.getProgramParameter(M,Zd)),v},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jd++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=U,this}let _p=0;class vp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),n=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xp(e),t.set(e,i)),i}}class xp{constructor(e){this.id=_p++,this.code=e,this.usedTimes=0}}function Mp(r,e,t,i,a,n,s){const o=new uo,l=new vp,c=new Set,u=[],p=a.logarithmicDepthBuffer,d=a.vertexTextures;let m=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return c.add(E),E===0?"uv":`uv${E}`}function f(E,v,C,k,B){const X=k.fog,Q=B.geometry,W=E.isMeshStandardMaterial?k.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),H=ee&&ee.mapping===sa?ee.image.height:null,ie=x[E.type];E.precision!==null&&(m=a.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const fe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Re=fe!==void 0?fe.length:0;let Fe=0;Q.morphAttributes.position!==void 0&&(Fe=1),Q.morphAttributes.normal!==void 0&&(Fe=2),Q.morphAttributes.color!==void 0&&(Fe=3);let qe,j,te,xe;if(ie){const We=Ht[ie];qe=We.vertexShader,j=We.fragmentShader}else qe=E.vertexShader,j=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);const oe=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Ce=B.isInstancedMesh===!0,Oe=B.isBatchedMesh===!0,$e=!!E.map,Be=!!E.matcap,ct=!!ee,b=!!E.aoMap,gt=!!E.lightMap,Ve=!!E.bumpMap,Ke=!!E.normalMap,ge=!!E.displacementMap,ke=!!E.emissiveMap,Se=!!E.metalnessMap,De=!!E.roughnessMap,nt=E.anisotropy>0,y=E.clearcoat>0,g=E.dispersion>0,N=E.iridescence>0,G=E.sheen>0,Y=E.transmission>0,V=nt&&!!E.anisotropyMap,Ee=y&&!!E.clearcoatMap,ne=y&&!!E.clearcoatNormalMap,_e=y&&!!E.clearcoatRoughnessMap,he=N&&!!E.iridescenceMap,K=N&&!!E.iridescenceThicknessMap,ce=G&&!!E.sheenColorMap,Pe=G&&!!E.sheenRoughnessMap,ye=!!E.specularMap,re=!!E.specularColorMap,Ue=!!E.specularIntensityMap,w=Y&&!!E.transmissionMap,se=Y&&!!E.thicknessMap,Z=!!E.gradientMap,me=!!E.alphaMap,$=E.alphaTest>0,q=!!E.alphaHash,de=!!E.extensions;let Te=pi;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Te=r.toneMapping);const ht={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:qe,fragmentShader:j,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Oe,batchingColor:Oe&&B._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,instancingMorph:Ce&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:sr,alphaToCoverage:!!E.alphaToCoverage,map:$e,matcap:Be,envMap:ct,envMapMode:ct&&ee.mapping,envMapCubeUVHeight:H,aoMap:b,lightMap:gt,bumpMap:Ve,normalMap:Ke,displacementMap:d&&ge,emissiveMap:ke,normalMapObjectSpace:Ke&&E.normalMapType===ml,normalMapTangentSpace:Ke&&E.normalMapType===fl,metalnessMap:Se,roughnessMap:De,anisotropy:nt,anisotropyMap:V,clearcoat:y,clearcoatMap:Ee,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:g,iridescence:N,iridescenceMap:he,iridescenceThicknessMap:K,sheen:G,sheenColorMap:ce,sheenRoughnessMap:Pe,specularMap:ye,specularColorMap:re,specularIntensityMap:Ue,transmission:Y,transmissionMap:w,thicknessMap:se,gradientMap:Z,opaque:E.transparent===!1&&E.blending===er&&E.alphaToCoverage===!1,alphaMap:me,alphaTest:$,alphaHash:q,combine:E.combine,mapUv:$e&&M(E.map.channel),aoMapUv:b&&M(E.aoMap.channel),lightMapUv:gt&&M(E.lightMap.channel),bumpMapUv:Ve&&M(E.bumpMap.channel),normalMapUv:Ke&&M(E.normalMap.channel),displacementMapUv:ge&&M(E.displacementMap.channel),emissiveMapUv:ke&&M(E.emissiveMap.channel),metalnessMapUv:Se&&M(E.metalnessMap.channel),roughnessMapUv:De&&M(E.roughnessMap.channel),anisotropyMapUv:V&&M(E.anisotropyMap.channel),clearcoatMapUv:Ee&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:K&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&M(E.sheenRoughnessMap.channel),specularMapUv:ye&&M(E.specularMap.channel),specularColorMapUv:re&&M(E.specularColorMap.channel),specularIntensityMapUv:Ue&&M(E.specularIntensityMap.channel),transmissionMapUv:w&&M(E.transmissionMap.channel),thicknessMapUv:se&&M(E.thicknessMap.channel),alphaMapUv:me&&M(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ke||nt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Q.attributes.uv&&($e||me),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Me,skinning:B.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Fe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:$e&&E.map.isVideoTexture===!0&&Ge.getTransfer(E.map.colorSpace)===Xe,decodeVideoTextureEmissive:ke&&E.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(E.emissiveMap.colorSpace)===Xe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$t,flipSided:E.side===Mt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:de&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&E.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function h(E){const v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)v.push(C),v.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(A(v,E),T(v,E),v.push(r.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function A(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function T(E,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const v=x[E.type];let C;if(v){const k=Ht[v];C=Yl.clone(k.uniforms)}else C=E.uniforms;return C}function D(E,v){let C;for(let k=0,B=u.length;k<B;k++){const X=u[k];if(X.cacheKey===v){C=X,++C.usedTimes;break}}return C===void 0&&(C=new gp(r,v,E,n),u.push(C)),C}function U(E){if(--E.usedTimes===0){const v=u.indexOf(E);u[v]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function I(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:S,acquireProgram:D,releaseProgram:U,releaseShaderCache:R,programs:u,dispose:I}}function Ep(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function i(s){r.delete(s)}function a(s,o,l){r.get(s)[o]=l}function n(){r=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:n}}function Sp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Xs(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function js(){const r=[];let e=0;const t=[],i=[],a=[];function n(){e=0,t.length=0,i.length=0,a.length=0}function s(p,d,m,x,M,f){let h=r[e];return h===void 0?(h={id:p.id,object:p,geometry:d,material:m,groupOrder:x,renderOrder:p.renderOrder,z:M,group:f},r[e]=h):(h.id=p.id,h.object=p,h.geometry=d,h.material=m,h.groupOrder=x,h.renderOrder=p.renderOrder,h.z=M,h.group=f),e++,h}function o(p,d,m,x,M,f){const h=s(p,d,m,x,M,f);m.transmission>0?i.push(h):m.transparent===!0?a.push(h):t.push(h)}function l(p,d,m,x,M,f){const h=s(p,d,m,x,M,f);m.transmission>0?i.unshift(h):m.transparent===!0?a.unshift(h):t.unshift(h)}function c(p,d){t.length>1&&t.sort(p||Sp),i.length>1&&i.sort(d||Xs),a.length>1&&a.sort(d||Xs)}function u(){for(let p=e,d=r.length;p<d;p++){const m=r[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:a,init:n,push:o,unshift:l,finish:u,sort:c}}function yp(){let r=new WeakMap;function e(i,a){const n=r.get(i);let s;return n===void 0?(s=new js,r.set(i,[s])):a>=n.length?(s=new js,n.push(s)):s=n[a],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Tp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ye};break;case"SpotLight":t={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function bp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ap=0;function wp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Rp(r){const e=new Tp,t=bp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const a=new O,n=new at,s=new at;function o(c){let u=0,p=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,x=0,M=0,f=0,h=0,A=0,T=0,S=0,D=0,U=0,R=0;c.sort(wp);for(let E=0,v=c.length;E<v;E++){const C=c[E],k=C.color,B=C.intensity,X=C.distance,Q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=k.r*B,p+=k.g*B,d+=k.b*B;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],B);R++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,H=t.get(C);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=C.shadow.matrix,A++}i.directional[m]=W,m++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(k).multiplyScalar(B),W.distance=X,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[M]=W;const ee=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,ee.updateMatrices(C),C.castShadow&&U++),i.spotLightMatrix[M]=ee.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=Q,S++}M++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy(k).multiplyScalar(B),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[f]=W,f++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const ee=C.shadow,H=t.get(C);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,H.shadowCameraNear=ee.camera.near,H.shadowCameraFar=ee.camera.far,i.pointShadow[x]=H,i.pointShadowMap[x]=Q,i.pointShadowMatrix[x]=C.shadow.matrix,T++}i.point[x]=W,x++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(B),W.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[h]=W,h++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==m||I.pointLength!==x||I.spotLength!==M||I.rectAreaLength!==f||I.hemiLength!==h||I.numDirectionalShadows!==A||I.numPointShadows!==T||I.numSpotShadows!==S||I.numSpotMaps!==D||I.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=f,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+D-U,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=R,I.directionalLength=m,I.pointLength=x,I.spotLength=M,I.rectAreaLength=f,I.hemiLength=h,I.numDirectionalShadows=A,I.numPointShadows=T,I.numSpotShadows=S,I.numSpotMaps=D,I.numLightProbes=R,i.version=Ap++)}function l(c,u){let p=0,d=0,m=0,x=0,M=0;const f=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const T=c[h];if(T.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(f),p++}else if(T.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(f),m++}else if(T.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(f),s.identity(),n.copy(T.matrixWorld),n.premultiply(f),s.extractRotation(n),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),x++}else if(T.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(f),d++}else if(T.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(f),M++}}}return{setup:o,setupView:l,state:i}}function Ys(r){const e=new Rp(r),t=[],i=[];function a(u){c.camera=u,t.length=0,i.length=0}function n(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:s}}function Cp(r){let e=new WeakMap;function t(a,n=0){const s=e.get(a);let o;return s===void 0?(o=new Ys(r),e.set(a,[o])):n>=s.length?(o=new Ys(r),s.push(o)):o=s[n],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Pp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Up=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lp(r,e,t){let i=new xo;const a=new Ne,n=new Ne,s=new it,o=new rc({depthPacking:pl}),l=new ac,c={},u=t.maxTextureSize,p={[fi]:Mt,[Mt]:fi,[$t]:$t},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Pp,fragmentShader:Up}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Ni;x.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Gt(x,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zs;let h=this.type;this.render=function(U,R,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||U.length===0)return;const E=r.getRenderTarget(),v=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),k=r.state;k.setBlending(di),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=h!==Jt&&this.type===Jt,X=h===Jt&&this.type!==Jt;for(let Q=0,W=U.length;Q<W;Q++){const ee=U[Q],H=ee.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const ie=H.getFrameExtents();if(a.multiply(ie),n.copy(H.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/ie.x),a.x=n.x*ie.x,H.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/ie.y),a.y=n.y*ie.y,H.mapSize.y=n.y)),H.map===null||B===!0||X===!0){const Re=this.type!==Jt?{minFilter:Bt,magFilter:Bt}:{};H.map!==null&&H.map.dispose(),H.map=new Li(a.x,a.y,Re),H.map.texture.name=ee.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const fe=H.getViewportCount();for(let Re=0;Re<fe;Re++){const Fe=H.getViewport(Re);s.set(n.x*Fe.x,n.y*Fe.y,n.x*Fe.z,n.y*Fe.w),k.viewport(s),H.updateMatrices(ee,Re),i=H.getFrustum(),S(R,I,H.camera,ee,this.type)}H.isPointLightShadow!==!0&&this.type===Jt&&A(H,I),H.needsUpdate=!1}h=this.type,f.needsUpdate=!1,r.setRenderTarget(E,v,C)};function A(U,R){const I=e.update(M);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,m.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Li(a.x,a.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(R,null,I,d,M,null),m.uniforms.shadow_pass.value=U.mapPass.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(R,null,I,m,M,null)}function T(U,R,I,E){let v=null;const C=I.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(C!==void 0)v=C;else if(v=I.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=v.uuid,B=R.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let Q=X[B];Q===void 0&&(Q=v.clone(),X[B]=Q,R.addEventListener("dispose",D)),v=Q}if(v.visible=R.visible,v.wireframe=R.wireframe,E===Jt?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:p[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=r.properties.get(v);k.light=I}return v}function S(U,R,I,E,v){if(U.visible===!1)return;if(U.layers.test(R.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&v===Jt)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,U.matrixWorld);const k=e.update(U),B=U.material;if(Array.isArray(B)){const X=k.groups;for(let Q=0,W=X.length;Q<W;Q++){const ee=X[Q],H=B[ee.materialIndex];if(H&&H.visible){const ie=T(U,H,E,v);U.onBeforeShadow(r,U,R,I,k,ie,ee),r.renderBufferDirect(I,null,k,ie,U,ee),U.onAfterShadow(r,U,R,I,k,ie,ee)}}}else if(B.visible){const X=T(U,B,E,v);U.onBeforeShadow(r,U,R,I,k,X,null),r.renderBufferDirect(I,null,k,X,U,null),U.onAfterShadow(r,U,R,I,k,X,null)}}const C=U.children;for(let k=0,B=C.length;k<B;k++)S(C[k],R,I,E,v)}function D(U){U.target.removeEventListener("dispose",D);for(const R in c){const I=c[R],E=U.target.uuid;E in I&&(I[E].dispose(),delete I[E])}}}const Dp={[Xa]:ja,[Ya]:Za,[qa]:Ja,[rr]:Ka,[ja]:Xa,[Za]:Ya,[Ja]:qa,[Ka]:rr};function Ip(r,e){function t(){let w=!1;const se=new it;let Z=null;const me=new it(0,0,0,0);return{setMask:function($){Z!==$&&!w&&(r.colorMask($,$,$,$),Z=$)},setLocked:function($){w=$},setClear:function($,q,de,Te,ht){ht===!0&&($*=Te,q*=Te,de*=Te),se.set($,q,de,Te),me.equals(se)===!1&&(r.clearColor($,q,de,Te),me.copy(se))},reset:function(){w=!1,Z=null,me.set(-1,0,0,0)}}}function i(){let w=!1,se=!1,Z=null,me=null,$=null;return{setReversed:function(q){if(se!==q){const de=e.get("EXT_clip_control");q?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),se=q;const Te=$;$=null,this.setClear(Te)}},getReversed:function(){return se},setTest:function(q){q?oe(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(q){Z!==q&&!w&&(r.depthMask(q),Z=q)},setFunc:function(q){if(se&&(q=Dp[q]),me!==q){switch(q){case Xa:r.depthFunc(r.NEVER);break;case ja:r.depthFunc(r.ALWAYS);break;case Ya:r.depthFunc(r.LESS);break;case rr:r.depthFunc(r.LEQUAL);break;case qa:r.depthFunc(r.EQUAL);break;case Ka:r.depthFunc(r.GEQUAL);break;case Za:r.depthFunc(r.GREATER);break;case Ja:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=q}},setLocked:function(q){w=q},setClear:function(q){$!==q&&(se&&(q=1-q),r.clearDepth(q),$=q)},reset:function(){w=!1,Z=null,me=null,$=null,se=!1}}}function a(){let w=!1,se=null,Z=null,me=null,$=null,q=null,de=null,Te=null,ht=null;return{setTest:function(We){w||(We?oe(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(We){se!==We&&!w&&(r.stencilMask(We),se=We)},setFunc:function(We,Ut,Wt){(Z!==We||me!==Ut||$!==Wt)&&(r.stencilFunc(We,Ut,Wt),Z=We,me=Ut,$=Wt)},setOp:function(We,Ut,Wt){(q!==We||de!==Ut||Te!==Wt)&&(r.stencilOp(We,Ut,Wt),q=We,de=Ut,Te=Wt)},setLocked:function(We){w=We},setClear:function(We){ht!==We&&(r.clearStencil(We),ht=We)},reset:function(){w=!1,se=null,Z=null,me=null,$=null,q=null,de=null,Te=null,ht=null}}}const n=new t,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let u={},p={},d=new WeakMap,m=[],x=null,M=!1,f=null,h=null,A=null,T=null,S=null,D=null,U=null,R=new Ye(0,0,0),I=0,E=!1,v=null,C=null,k=null,B=null,X=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=ee>=1):H.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=ee>=2);let ie=null,fe={};const Re=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),qe=new it().fromArray(Re),j=new it().fromArray(Fe);function te(w,se,Z,me){const $=new Uint8Array(4),q=r.createTexture();r.bindTexture(w,q),r.texParameteri(w,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(w,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<Z;de++)w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,$):r.texImage2D(se+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,$);return q}const xe={};xe[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(r.DEPTH_TEST),s.setFunc(rr),Ve(!1),Ke($n),oe(r.CULL_FACE),b(di);function oe(w){u[w]!==!0&&(r.enable(w),u[w]=!0)}function Me(w){u[w]!==!1&&(r.disable(w),u[w]=!1)}function Ce(w,se){return p[w]!==se?(r.bindFramebuffer(w,se),p[w]=se,w===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=se),w===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=se),!0):!1}function Oe(w,se){let Z=m,me=!1;if(w){Z=d.get(se),Z===void 0&&(Z=[],d.set(se,Z));const $=w.textures;if(Z.length!==$.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let q=0,de=$.length;q<de;q++)Z[q]=r.COLOR_ATTACHMENT0+q;Z.length=$.length,me=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,me=!0);me&&r.drawBuffers(Z)}function $e(w){return x!==w?(r.useProgram(w),x=w,!0):!1}const Be={[bi]:r.FUNC_ADD,[Bo]:r.FUNC_SUBTRACT,[Ho]:r.FUNC_REVERSE_SUBTRACT};Be[ko]=r.MIN,Be[Go]=r.MAX;const ct={[Vo]:r.ZERO,[Wo]:r.ONE,[Xo]:r.SRC_COLOR,[Va]:r.SRC_ALPHA,[Jo]:r.SRC_ALPHA_SATURATE,[Ko]:r.DST_COLOR,[Yo]:r.DST_ALPHA,[jo]:r.ONE_MINUS_SRC_COLOR,[Wa]:r.ONE_MINUS_SRC_ALPHA,[Zo]:r.ONE_MINUS_DST_COLOR,[qo]:r.ONE_MINUS_DST_ALPHA,[$o]:r.CONSTANT_COLOR,[Qo]:r.ONE_MINUS_CONSTANT_COLOR,[el]:r.CONSTANT_ALPHA,[tl]:r.ONE_MINUS_CONSTANT_ALPHA};function b(w,se,Z,me,$,q,de,Te,ht,We){if(w===di){M===!0&&(Me(r.BLEND),M=!1);return}if(M===!1&&(oe(r.BLEND),M=!0),w!==zo){if(w!==f||We!==E){if((h!==bi||S!==bi)&&(r.blendEquation(r.FUNC_ADD),h=bi,S=bi),We)switch(w){case er:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qn:r.blendFunc(r.ONE,r.ONE);break;case es:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ts:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case er:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case es:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ts:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}A=null,T=null,D=null,U=null,R.set(0,0,0),I=0,f=w,E=We}return}$=$||se,q=q||Z,de=de||me,(se!==h||$!==S)&&(r.blendEquationSeparate(Be[se],Be[$]),h=se,S=$),(Z!==A||me!==T||q!==D||de!==U)&&(r.blendFuncSeparate(ct[Z],ct[me],ct[q],ct[de]),A=Z,T=me,D=q,U=de),(Te.equals(R)===!1||ht!==I)&&(r.blendColor(Te.r,Te.g,Te.b,ht),R.copy(Te),I=ht),f=w,E=!1}function gt(w,se){w.side===$t?Me(r.CULL_FACE):oe(r.CULL_FACE);let Z=w.side===Mt;se&&(Z=!Z),Ve(Z),w.blending===er&&w.transparent===!1?b(di):b(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),n.setMask(w.colorWrite);const me=w.stencilWrite;o.setTest(me),me&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),ke(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(w){v!==w&&(w?r.frontFace(r.CW):r.frontFace(r.CCW),v=w)}function Ke(w){w!==No?(oe(r.CULL_FACE),w!==C&&(w===$n?r.cullFace(r.BACK):w===Oo?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),C=w}function ge(w){w!==k&&(W&&r.lineWidth(w),k=w)}function ke(w,se,Z){w?(oe(r.POLYGON_OFFSET_FILL),(B!==se||X!==Z)&&(r.polygonOffset(se,Z),B=se,X=Z)):Me(r.POLYGON_OFFSET_FILL)}function Se(w){w?oe(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function De(w){w===void 0&&(w=r.TEXTURE0+Q-1),ie!==w&&(r.activeTexture(w),ie=w)}function nt(w,se,Z){Z===void 0&&(ie===null?Z=r.TEXTURE0+Q-1:Z=ie);let me=fe[Z];me===void 0&&(me={type:void 0,texture:void 0},fe[Z]=me),(me.type!==w||me.texture!==se)&&(ie!==Z&&(r.activeTexture(Z),ie=Z),r.bindTexture(w,se||xe[w]),me.type=w,me.texture=se)}function y(){const w=fe[ie];w!==void 0&&w.type!==void 0&&(r.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function g(){try{r.compressedTexImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function G(){try{r.texSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Y(){try{r.texSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function V(){try{r.compressedTexSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ee(){try{r.compressedTexSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ne(){try{r.texStorage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function _e(){try{r.texStorage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function he(){try{r.texImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function K(){try{r.texImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ce(w){qe.equals(w)===!1&&(r.scissor(w.x,w.y,w.z,w.w),qe.copy(w))}function Pe(w){j.equals(w)===!1&&(r.viewport(w.x,w.y,w.z,w.w),j.copy(w))}function ye(w,se){let Z=c.get(se);Z===void 0&&(Z=new WeakMap,c.set(se,Z));let me=Z.get(w);me===void 0&&(me=r.getUniformBlockIndex(se,w.name),Z.set(w,me))}function re(w,se){const Z=c.get(se).get(w);l.get(se)!==Z&&(r.uniformBlockBinding(se,Z,w.__bindingPointIndex),l.set(se,Z))}function Ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),s.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ie=null,fe={},p={},d=new WeakMap,m=[],x=null,M=!1,f=null,h=null,A=null,T=null,S=null,D=null,U=null,R=new Ye(0,0,0),I=0,E=!1,v=null,C=null,k=null,B=null,X=null,qe.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:oe,disable:Me,bindFramebuffer:Ce,drawBuffers:Oe,useProgram:$e,setBlending:b,setMaterial:gt,setFlipSided:Ve,setCullFace:Ke,setLineWidth:ge,setPolygonOffset:ke,setScissorTest:Se,activeTexture:De,bindTexture:nt,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:N,texImage2D:he,texImage3D:K,updateUBOMapping:ye,uniformBlockBinding:re,texStorage2D:ne,texStorage3D:_e,texSubImage2D:G,texSubImage3D:Y,compressedTexSubImage2D:V,compressedTexSubImage3D:Ee,scissor:ce,viewport:Pe,reset:Ue}}function Np(r,e,t,i,a,n,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let p;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,g){return m?new OffscreenCanvas(y,g):na("canvas")}function M(y,g,N){let G=1;const Y=nt(y);if((Y.width>N||Y.height>N)&&(G=N/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const V=Math.floor(G*Y.width),Ee=Math.floor(G*Y.height);p===void 0&&(p=x(V,Ee));const ne=g?x(V,Ee):p;return ne.width=V,ne.height=Ee,ne.getContext("2d").drawImage(y,0,0,V,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+V+"x"+Ee+")."),ne}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),y;return y}function f(y){return y.generateMipmaps}function h(y){r.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?r.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(y,g,N,G,Y=!1){if(y!==null){if(r[y]!==void 0)return r[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let V=g;if(g===r.RED&&(N===r.FLOAT&&(V=r.R32F),N===r.HALF_FLOAT&&(V=r.R16F),N===r.UNSIGNED_BYTE&&(V=r.R8)),g===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(V=r.R8UI),N===r.UNSIGNED_SHORT&&(V=r.R16UI),N===r.UNSIGNED_INT&&(V=r.R32UI),N===r.BYTE&&(V=r.R8I),N===r.SHORT&&(V=r.R16I),N===r.INT&&(V=r.R32I)),g===r.RG&&(N===r.FLOAT&&(V=r.RG32F),N===r.HALF_FLOAT&&(V=r.RG16F),N===r.UNSIGNED_BYTE&&(V=r.RG8)),g===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(V=r.RG8UI),N===r.UNSIGNED_SHORT&&(V=r.RG16UI),N===r.UNSIGNED_INT&&(V=r.RG32UI),N===r.BYTE&&(V=r.RG8I),N===r.SHORT&&(V=r.RG16I),N===r.INT&&(V=r.RG32I)),g===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(V=r.RGB8UI),N===r.UNSIGNED_SHORT&&(V=r.RGB16UI),N===r.UNSIGNED_INT&&(V=r.RGB32UI),N===r.BYTE&&(V=r.RGB8I),N===r.SHORT&&(V=r.RGB16I),N===r.INT&&(V=r.RGB32I)),g===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(V=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(V=r.RGBA16UI),N===r.UNSIGNED_INT&&(V=r.RGBA32UI),N===r.BYTE&&(V=r.RGBA8I),N===r.SHORT&&(V=r.RGBA16I),N===r.INT&&(V=r.RGBA32I)),g===r.RGB&&N===r.UNSIGNED_INT_5_9_9_9_REV&&(V=r.RGB9_E5),g===r.RGBA){const Ee=Y?ra:Ge.getTransfer(G);N===r.FLOAT&&(V=r.RGBA32F),N===r.HALF_FLOAT&&(V=r.RGBA16F),N===r.UNSIGNED_BYTE&&(V=Ee===Xe?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(V=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(V=r.RGB5_A1)}return(V===r.R16F||V===r.R32F||V===r.RG16F||V===r.RG32F||V===r.RGBA16F||V===r.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function S(y,g){let N;return y?g===null||g===Pi||g===vr?N=r.DEPTH24_STENCIL8:g===Qt?N=r.DEPTH32F_STENCIL8:g===_r&&(N=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Pi||g===vr?N=r.DEPTH_COMPONENT24:g===Qt?N=r.DEPTH_COMPONENT32F:g===_r&&(N=r.DEPTH_COMPONENT16),N}function D(y,g){return f(y)===!0||y.isFramebufferTexture&&y.minFilter!==Bt&&y.minFilter!==kt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function U(y){const g=y.target;g.removeEventListener("dispose",U),I(g),g.isVideoTexture&&u.delete(g)}function R(y){const g=y.target;g.removeEventListener("dispose",R),v(g)}function I(y){const g=i.get(y);if(g.__webglInit===void 0)return;const N=y.source,G=d.get(N);if(G){const Y=G[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(y),Object.keys(G).length===0&&d.delete(N)}i.remove(y)}function E(y){const g=i.get(y);r.deleteTexture(g.__webglTexture);const N=y.source,G=d.get(N);delete G[g.__cacheKey],s.memory.textures--}function v(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let Y=0;Y<g.__webglFramebuffer[G].length;Y++)r.deleteFramebuffer(g.__webglFramebuffer[G][Y]);else r.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)r.deleteFramebuffer(g.__webglFramebuffer[G]);else r.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&r.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&r.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&r.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=y.textures;for(let G=0,Y=N.length;G<Y;G++){const V=i.get(N[G]);V.__webglTexture&&(r.deleteTexture(V.__webglTexture),s.memory.textures--),i.remove(N[G])}i.remove(y)}let C=0;function k(){C=0}function B(){const y=C;return y>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+a.maxTextures),C+=1,y}function X(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Q(y,g){const N=i.get(y);if(y.isVideoTexture&&Se(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const G=y.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(N,y,g);return}}t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+g)}function W(y,g){const N=i.get(y);if(y.version>0&&N.__version!==y.version){xe(N,y,g);return}t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+g)}function ee(y,g){const N=i.get(y);if(y.version>0&&N.__version!==y.version){xe(N,y,g);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+g)}function H(y,g){const N=i.get(y);if(y.version>0&&N.__version!==y.version){oe(N,y,g);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+g)}const ie={[en]:r.REPEAT,[wi]:r.CLAMP_TO_EDGE,[tn]:r.MIRRORED_REPEAT},fe={[Bt]:r.NEAREST,[ul]:r.NEAREST_MIPMAP_NEAREST,[wr]:r.NEAREST_MIPMAP_LINEAR,[kt]:r.LINEAR,[da]:r.LINEAR_MIPMAP_NEAREST,[Ri]:r.LINEAR_MIPMAP_LINEAR},Re={[gl]:r.NEVER,[Sl]:r.ALWAYS,[_l]:r.LESS,[oo]:r.LEQUAL,[vl]:r.EQUAL,[El]:r.GEQUAL,[xl]:r.GREATER,[Ml]:r.NOTEQUAL};function Fe(y,g){if(g.type===Qt&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===kt||g.magFilter===da||g.magFilter===wr||g.magFilter===Ri||g.minFilter===kt||g.minFilter===da||g.minFilter===wr||g.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(y,r.TEXTURE_WRAP_S,ie[g.wrapS]),r.texParameteri(y,r.TEXTURE_WRAP_T,ie[g.wrapT]),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,ie[g.wrapR]),r.texParameteri(y,r.TEXTURE_MAG_FILTER,fe[g.magFilter]),r.texParameteri(y,r.TEXTURE_MIN_FILTER,fe[g.minFilter]),g.compareFunction&&(r.texParameteri(y,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(y,r.TEXTURE_COMPARE_FUNC,Re[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Bt||g.minFilter!==wr&&g.minFilter!==Ri||g.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function qe(y,g){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",U));const G=g.source;let Y=d.get(G);Y===void 0&&(Y={},d.set(G,Y));const V=X(g);if(V!==y.__cacheKey){Y[V]===void 0&&(Y[V]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,N=!0),Y[V].usedTimes++;const Ee=Y[y.__cacheKey];Ee!==void 0&&(Y[y.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(g)),y.__cacheKey=V,y.__webglTexture=Y[V].texture}return N}function j(y,g,N){return Math.floor(Math.floor(y/N)/g)}function te(y,g,N,G){const Y=y.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,g.width,g.height,N,G,g.data);else{Y.sort((he,K)=>he.start-K.start);let V=0;for(let he=1;he<Y.length;he++){const K=Y[V],ce=Y[he],Pe=K.start+K.count,ye=j(ce.start,g.width,4),re=j(K.start,g.width,4);ce.start<=Pe+1&&ye===re&&j(ce.start+ce.count-1,g.width,4)===ye?K.count=Math.max(K.count,ce.start+ce.count-K.start):(++V,Y[V]=ce)}Y.length=V+1;const Ee=r.getParameter(r.UNPACK_ROW_LENGTH),ne=r.getParameter(r.UNPACK_SKIP_PIXELS),_e=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,g.width);for(let he=0,K=Y.length;he<K;he++){const ce=Y[he],Pe=Math.floor(ce.start/4),ye=Math.ceil(ce.count/4),re=Pe%g.width,Ue=Math.floor(Pe/g.width),w=ye;r.pixelStorei(r.UNPACK_SKIP_PIXELS,re),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ue),t.texSubImage2D(r.TEXTURE_2D,0,re,Ue,w,1,N,G,g.data)}y.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ee),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),r.pixelStorei(r.UNPACK_SKIP_ROWS,_e)}}function xe(y,g,N){let G=r.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=r.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=r.TEXTURE_3D);const Y=qe(y,g),V=g.source;t.bindTexture(G,y.__webglTexture,r.TEXTURE0+N);const Ee=i.get(V);if(V.version!==Ee.__version||Y===!0){t.activeTexture(r.TEXTURE0+N);const ne=Ge.getPrimaries(Ge.workingColorSpace),_e=g.colorSpace===ui?null:Ge.getPrimaries(g.colorSpace),he=g.colorSpace===ui||ne===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let K=M(g.image,!1,a.maxTextureSize);K=De(g,K);const ce=n.convert(g.format,g.colorSpace),Pe=n.convert(g.type);let ye=T(g.internalFormat,ce,Pe,g.colorSpace,g.isVideoTexture);Fe(G,g);let re;const Ue=g.mipmaps,w=g.isVideoTexture!==!0,se=Ee.__version===void 0||Y===!0,Z=V.dataReady,me=D(g,K);if(g.isDepthTexture)ye=S(g.format===Mr,g.type),se&&(w?t.texStorage2D(r.TEXTURE_2D,1,ye,K.width,K.height):t.texImage2D(r.TEXTURE_2D,0,ye,K.width,K.height,0,ce,Pe,null));else if(g.isDataTexture)if(Ue.length>0){w&&se&&t.texStorage2D(r.TEXTURE_2D,me,ye,Ue[0].width,Ue[0].height);for(let $=0,q=Ue.length;$<q;$++)re=Ue[$],w?Z&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,re.width,re.height,ce,Pe,re.data):t.texImage2D(r.TEXTURE_2D,$,ye,re.width,re.height,0,ce,Pe,re.data);g.generateMipmaps=!1}else w?(se&&t.texStorage2D(r.TEXTURE_2D,me,ye,K.width,K.height),Z&&te(g,K,ce,Pe)):t.texImage2D(r.TEXTURE_2D,0,ye,K.width,K.height,0,ce,Pe,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){w&&se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,ye,Ue[0].width,Ue[0].height,K.depth);for(let $=0,q=Ue.length;$<q;$++)if(re=Ue[$],g.format!==zt)if(ce!==null)if(w){if(Z)if(g.layerUpdates.size>0){const de=ys(re.width,re.height,g.format,g.type);for(const Te of g.layerUpdates){const ht=re.data.subarray(Te*de/re.data.BYTES_PER_ELEMENT,(Te+1)*de/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,Te,re.width,re.height,1,ce,ht)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,K.depth,ce,re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,ye,re.width,re.height,K.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?Z&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,K.depth,ce,Pe,re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,ye,re.width,re.height,K.depth,0,ce,Pe,re.data)}else{w&&se&&t.texStorage2D(r.TEXTURE_2D,me,ye,Ue[0].width,Ue[0].height);for(let $=0,q=Ue.length;$<q;$++)re=Ue[$],g.format!==zt?ce!==null?w?Z&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,re.width,re.height,ce,re.data):t.compressedTexImage2D(r.TEXTURE_2D,$,ye,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?Z&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,re.width,re.height,ce,Pe,re.data):t.texImage2D(r.TEXTURE_2D,$,ye,re.width,re.height,0,ce,Pe,re.data)}else if(g.isDataArrayTexture)if(w){if(se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,ye,K.width,K.height,K.depth),Z)if(g.layerUpdates.size>0){const $=ys(K.width,K.height,g.format,g.type);for(const q of g.layerUpdates){const de=K.data.subarray(q*$/K.data.BYTES_PER_ELEMENT,(q+1)*$/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,q,K.width,K.height,1,ce,Pe,de)}g.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ce,Pe,K.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ye,K.width,K.height,K.depth,0,ce,Pe,K.data);else if(g.isData3DTexture)w?(se&&t.texStorage3D(r.TEXTURE_3D,me,ye,K.width,K.height,K.depth),Z&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ce,Pe,K.data)):t.texImage3D(r.TEXTURE_3D,0,ye,K.width,K.height,K.depth,0,ce,Pe,K.data);else if(g.isFramebufferTexture){if(se)if(w)t.texStorage2D(r.TEXTURE_2D,me,ye,K.width,K.height);else{let $=K.width,q=K.height;for(let de=0;de<me;de++)t.texImage2D(r.TEXTURE_2D,de,ye,$,q,0,ce,Pe,null),$>>=1,q>>=1}}else if(Ue.length>0){if(w&&se){const $=nt(Ue[0]);t.texStorage2D(r.TEXTURE_2D,me,ye,$.width,$.height)}for(let $=0,q=Ue.length;$<q;$++)re=Ue[$],w?Z&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ce,Pe,re):t.texImage2D(r.TEXTURE_2D,$,ye,ce,Pe,re);g.generateMipmaps=!1}else if(w){if(se){const $=nt(K);t.texStorage2D(r.TEXTURE_2D,me,ye,$.width,$.height)}Z&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce,Pe,K)}else t.texImage2D(r.TEXTURE_2D,0,ye,ce,Pe,K);f(g)&&h(G),Ee.__version=V.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function oe(y,g,N){if(g.image.length!==6)return;const G=qe(y,g),Y=g.source;t.bindTexture(r.TEXTURE_CUBE_MAP,y.__webglTexture,r.TEXTURE0+N);const V=i.get(Y);if(Y.version!==V.__version||G===!0){t.activeTexture(r.TEXTURE0+N);const Ee=Ge.getPrimaries(Ge.workingColorSpace),ne=g.colorSpace===ui?null:Ge.getPrimaries(g.colorSpace),_e=g.colorSpace===ui||Ee===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const he=g.isCompressedTexture||g.image[0].isCompressedTexture,K=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let q=0;q<6;q++)!he&&!K?ce[q]=M(g.image[q],!0,a.maxCubemapSize):ce[q]=K?g.image[q].image:g.image[q],ce[q]=De(g,ce[q]);const Pe=ce[0],ye=n.convert(g.format,g.colorSpace),re=n.convert(g.type),Ue=T(g.internalFormat,ye,re,g.colorSpace),w=g.isVideoTexture!==!0,se=V.__version===void 0||G===!0,Z=Y.dataReady;let me=D(g,Pe);Fe(r.TEXTURE_CUBE_MAP,g);let $;if(he){w&&se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ue,Pe.width,Pe.height);for(let q=0;q<6;q++){$=ce[q].mipmaps;for(let de=0;de<$.length;de++){const Te=$[de];g.format!==zt?ye!==null?w?Z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,0,0,Te.width,Te.height,ye,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,Ue,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,0,0,Te.width,Te.height,ye,re,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,Ue,Te.width,Te.height,0,ye,re,Te.data)}}}else{if($=g.mipmaps,w&&se){$.length>0&&me++;const q=nt(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Ue,q.width,q.height)}for(let q=0;q<6;q++)if(K){w?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ce[q].width,ce[q].height,ye,re,ce[q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ue,ce[q].width,ce[q].height,0,ye,re,ce[q].data);for(let de=0;de<$.length;de++){const Te=$[de].image[q].image;w?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,0,0,Te.width,Te.height,ye,re,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,Ue,Te.width,Te.height,0,ye,re,Te.data)}}else{w?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ye,re,ce[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ue,ye,re,ce[q]);for(let de=0;de<$.length;de++){const Te=$[de];w?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,0,0,ye,re,Te.image[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,Ue,ye,re,Te.image[q])}}}f(g)&&h(r.TEXTURE_CUBE_MAP),V.__version=Y.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Me(y,g,N,G,Y,V){const Ee=n.convert(N.format,N.colorSpace),ne=n.convert(N.type),_e=T(N.internalFormat,Ee,ne,N.colorSpace),he=i.get(g),K=i.get(N);if(K.__renderTarget=g,!he.__hasExternalTextures){const ce=Math.max(1,g.width>>V),Pe=Math.max(1,g.height>>V);Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?t.texImage3D(Y,V,_e,ce,Pe,g.depth,0,Ee,ne,null):t.texImage2D(Y,V,_e,ce,Pe,0,Ee,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,y),ke(g)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,Y,K.__webglTexture,0,ge(g)):(Y===r.TEXTURE_2D||Y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,G,Y,K.__webglTexture,V),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(y,g,N){if(r.bindRenderbuffer(r.RENDERBUFFER,y),g.depthBuffer){const G=g.depthTexture,Y=G&&G.isDepthTexture?G.type:null,V=S(g.stencilBuffer,Y),Ee=g.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=ge(g);ke(g)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,V,g.width,g.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,V,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,V,g.width,g.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,y)}else{const G=g.textures;for(let Y=0;Y<G.length;Y++){const V=G[Y],Ee=n.convert(V.format,V.colorSpace),ne=n.convert(V.type),_e=T(V.internalFormat,Ee,ne,V.colorSpace),he=ge(g);N&&ke(g)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,_e,g.width,g.height):ke(g)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,_e,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,_e,g.width,g.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Oe(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const N=i.get(g.depthTexture);N.__renderTarget=g,(!N.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);const G=N.__webglTexture,Y=ge(g);if(g.depthTexture.format===xr)ke(g)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0);else if(g.depthTexture.format===Mr)ke(g)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function $e(y){const g=i.get(y),N=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const G=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=G}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const G=y.texture.mipmaps;G&&G.length>0?Oe(g.__webglFramebuffer[0],y):Oe(g.__webglFramebuffer,y)}else if(N){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=r.createRenderbuffer(),Ce(g.__webglDepthbuffer[G],y,!1);else{const Y=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[G];r.bindRenderbuffer(r.RENDERBUFFER,V),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,V)}}else{const G=y.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=r.createRenderbuffer(),Ce(g.__webglDepthbuffer,y,!1);else{const Y=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,V),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,V)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(y,g,N){const G=i.get(y);g!==void 0&&Me(G.__webglFramebuffer,y,y.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&$e(y)}function ct(y){const g=y.texture,N=i.get(y),G=i.get(g);y.addEventListener("dispose",R);const Y=y.textures,V=y.isWebGLCubeRenderTarget===!0,Ee=Y.length>1;if(Ee||(G.__webglTexture===void 0&&(G.__webglTexture=r.createTexture()),G.__version=g.version,s.memory.textures++),V){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let _e=0;_e<g.mipmaps.length;_e++)N.__webglFramebuffer[ne][_e]=r.createFramebuffer()}else N.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)N.__webglFramebuffer[ne]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let ne=0,_e=Y.length;ne<_e;ne++){const he=i.get(Y[ne]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),s.memory.textures++)}if(y.samples>0&&ke(y)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<Y.length;ne++){const _e=Y[ne];N.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const he=n.convert(_e.format,_e.colorSpace),K=n.convert(_e.type),ce=T(_e.internalFormat,he,K,_e.colorSpace,y.isXRRenderTarget===!0),Pe=ge(y);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,ce,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(V){t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)Me(N.__webglFramebuffer[ne][_e],y,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else Me(N.__webglFramebuffer[ne],y,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);f(g)&&h(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ne=0,_e=Y.length;ne<_e;ne++){const he=Y[ne],K=i.get(he);t.bindTexture(r.TEXTURE_2D,K.__webglTexture),Fe(r.TEXTURE_2D,he),Me(N.__webglFramebuffer,y,he,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,0),f(he)&&h(r.TEXTURE_2D)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ne=y.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,G.__webglTexture),Fe(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)Me(N.__webglFramebuffer[_e],y,g,r.COLOR_ATTACHMENT0,ne,_e);else Me(N.__webglFramebuffer,y,g,r.COLOR_ATTACHMENT0,ne,0);f(g)&&h(ne),t.unbindTexture()}y.depthBuffer&&$e(y)}function b(y){const g=y.textures;for(let N=0,G=g.length;N<G;N++){const Y=g[N];if(f(Y)){const V=A(y),Ee=i.get(Y).__webglTexture;t.bindTexture(V,Ee),h(V),t.unbindTexture()}}}const gt=[],Ve=[];function Ke(y){if(y.samples>0){if(ke(y)===!1){const g=y.textures,N=y.width,G=y.height;let Y=r.COLOR_BUFFER_BIT;const V=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=i.get(y),ne=g.length>1;if(ne)for(let he=0;he<g.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const _e=y.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let he=0;he<g.length;he++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Y|=r.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Y|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[he]);const K=i.get(g[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,K,0)}r.blitFramebuffer(0,0,N,G,0,0,N,G,Y,r.NEAREST),l===!0&&(gt.length=0,Ve.length=0,gt.push(r.COLOR_ATTACHMENT0+he),y.depthBuffer&&y.resolveDepthBuffer===!1&&(gt.push(V),Ve.push(V),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<g.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[he]);const K=i.get(g[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,K,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[g])}}}function ge(y){return Math.min(a.maxSamples,y.samples)}function ke(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Se(y){const g=s.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function De(y,g){const N=y.colorSpace,G=y.format,Y=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==sr&&N!==ui&&(Ge.getTransfer(N)===Xe?(G!==zt||Y!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}function nt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=H,this.rebindTextures=Be,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ke}function Op(r,e){function t(i,a=ui){let n;const s=Ge.getTransfer(a);if(i===ii)return r.UNSIGNED_BYTE;if(i===In)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Nn)return r.UNSIGNED_SHORT_5_5_5_1;if(i===to)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Qs)return r.BYTE;if(i===eo)return r.SHORT;if(i===_r)return r.UNSIGNED_SHORT;if(i===Dn)return r.INT;if(i===Pi)return r.UNSIGNED_INT;if(i===Qt)return r.FLOAT;if(i===Sr)return r.HALF_FLOAT;if(i===io)return r.ALPHA;if(i===ro)return r.RGB;if(i===zt)return r.RGBA;if(i===xr)return r.DEPTH_COMPONENT;if(i===Mr)return r.DEPTH_STENCIL;if(i===ao)return r.RED;if(i===On)return r.RED_INTEGER;if(i===no)return r.RG;if(i===Fn)return r.RG_INTEGER;if(i===zn)return r.RGBA_INTEGER;if(i===Zr||i===Jr||i===$r||i===Qr)if(s===Xe)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===Zr)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$r)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===Zr)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jr)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$r)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qr)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rn||i===an||i===nn||i===sn)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===rn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===an)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nn)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===on||i===ln||i===cn)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===on||i===ln)return s===Xe?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===cn)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hn||i===un||i===dn||i===pn||i===fn||i===mn||i===gn||i===_n||i===vn||i===xn||i===Mn||i===En||i===Sn||i===yn)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===hn)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===un)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dn)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pn)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fn)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mn)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gn)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_n)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vn)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xn)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mn)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===En)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sn)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yn)return s===Xe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ea||i===Tn||i===bn)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===ea)return s===Xe?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tn)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bn)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===so||i===An||i===wn||i===Rn)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===ea)return n.COMPRESSED_RED_RGTC1_EXT;if(i===An)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rn)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const Fp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new Et,n=e.properties.get(a);n.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mi({vertexShader:Fp,fragmentShader:zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new la(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hp extends Ii{constructor(e,t){super();const i=this;let a=null,n=1,s=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,m=null,x=null;const M=new Bp,f=t.getContextAttributes();let h=null,A=null;const T=[],S=[],D=new Ne;let U=null;const R=new Pt;R.viewport=new it;const I=new Pt;I.viewport=new it;const E=[R,I],v=new sc;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=T[j];return te===void 0&&(te=new Ia,T[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=T[j];return te===void 0&&(te=new Ia,T[j]=te),te.getGripSpace()},this.getHand=function(j){let te=T[j];return te===void 0&&(te=new Ia,T[j]=te),te.getHandSpace()};function B(j){const te=S.indexOf(j.inputSource);if(te===-1)return;const xe=T[te];xe!==void 0&&(xe.update(j.inputSource,j.frame,c||s),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",Q);for(let j=0;j<T.length;j++){const te=S[j];te!==null&&(S[j]=null,T[j].disconnect(te))}C=null,k=null,M.reset(),e.setRenderTarget(h),m=null,d=null,p=null,a=null,A=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){n=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(h=e.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",X),a.addEventListener("inputsourceschange",Q),f.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,xe=null,oe=null;f.depth&&(oe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=f.stencil?Mr:xr,xe=f.stencil?vr:Pi);const Me={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:n};p=new XRWebGLBinding(a,t),d=p.createProjectionLayer(Me),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Li(d.textureWidth,d.textureHeight,{format:zt,type:ii,depthTexture:new Mo(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:n};m=new XRWebGLLayer(a,t,te),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Li(m.framebufferWidth,m.framebufferHeight,{format:zt,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),qe.setContext(a),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(j){for(let te=0;te<j.removed.length;te++){const xe=j.removed[te],oe=S.indexOf(xe);oe>=0&&(S[oe]=null,T[oe].disconnect(xe))}for(let te=0;te<j.added.length;te++){const xe=j.added[te];let oe=S.indexOf(xe);if(oe===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=S.length){S.push(xe),oe=Ce;break}else if(S[Ce]===null){S[Ce]=xe,oe=Ce;break}if(oe===-1)break}const Me=T[oe];Me&&Me.connect(xe)}}const W=new O,ee=new O;function H(j,te,xe){W.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);const oe=W.distanceTo(ee),Me=te.projectionMatrix.elements,Ce=xe.projectionMatrix.elements,Oe=Me[14]/(Me[10]-1),$e=Me[14]/(Me[10]+1),Be=(Me[9]+1)/Me[5],ct=(Me[9]-1)/Me[5],b=(Me[8]-1)/Me[0],gt=(Ce[8]+1)/Ce[0],Ve=Oe*b,Ke=Oe*gt,ge=oe/(-b+gt),ke=ge*-b;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ke),j.translateZ(ge),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Me[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Se=Oe+ge,De=$e+ge,nt=Ve-ke,y=Ke+(oe-ke),g=Be*$e/De*Se,N=ct*$e/De*Se;j.projectionMatrix.makePerspective(nt,y,g,N,Se,De),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ie(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let te=j.near,xe=j.far;M.texture!==null&&(M.depthNear>0&&(te=M.depthNear),M.depthFar>0&&(xe=M.depthFar)),v.near=I.near=R.near=te,v.far=I.far=R.far=xe,(C!==v.near||k!==v.far)&&(a.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,k=v.far),R.layers.mask=j.layers.mask|2,I.layers.mask=j.layers.mask|4,v.layers.mask=R.layers.mask|I.layers.mask;const oe=j.parent,Me=v.cameras;ie(v,oe);for(let Ce=0;Ce<Me.length;Ce++)ie(Me[Ce],oe);Me.length===2?H(v,R,I):v.projectionMatrix.copy(R.projectionMatrix),fe(j,v,oe)};function fe(j,te,xe){xe===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Cn*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let Re=null;function Fe(j,te){if(u=te.getViewerPose(c||s),x=te,u!==null){const xe=u.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let oe=!1;xe.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Ce=0;Ce<xe.length;Ce++){const Oe=xe[Ce];let $e=null;if(m!==null)$e=m.getViewport(Oe);else{const ct=p.getViewSubImage(d,Oe);$e=ct.viewport,Ce===0&&(e.setRenderTargetTextures(A,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(A))}let Be=E[Ce];Be===void 0&&(Be=new Pt,Be.layers.enable(Ce),Be.viewport=new it,E[Ce]=Be),Be.matrix.fromArray(Oe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Oe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set($e.x,$e.y,$e.width,$e.height),Ce===0&&(v.matrix.copy(Be.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(Be)}const Me=a.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&p){const Ce=p.getDepthInformation(xe[0]);Ce&&Ce.isValid&&Ce.texture&&M.init(e,Ce,a.renderState)}}for(let xe=0;xe<T.length;xe++){const oe=S[xe],Me=T[xe];oe!==null&&Me!==void 0&&Me.update(oe,te,c||s)}Re&&Re(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),x=null}const qe=new Eo;qe.setAnimationLoop(Fe),this.setAnimationLoop=function(j){Re=j},this.dispose=function(){}}}const yi=new ri,kp=new at;function Gp(r,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,go(r)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function a(f,h,A,T,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?n(f,h):h.isMeshToonMaterial?(n(f,h),p(f,h)):h.isMeshPhongMaterial?(n(f,h),u(f,h)):h.isMeshStandardMaterial?(n(f,h),d(f,h),h.isMeshPhysicalMaterial&&m(f,h,S)):h.isMeshMatcapMaterial?(n(f,h),x(f,h)):h.isMeshDepthMaterial?n(f,h):h.isMeshDistanceMaterial?(n(f,h),M(f,h)):h.isMeshNormalMaterial?n(f,h):h.isLineBasicMaterial?(s(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,A,T):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function n(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Mt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Mt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const A=e.get(h),T=A.envMap,S=A.envMapRotation;T&&(f.envMap.value=T,yi.copy(S),yi.x*=-1,yi.y*=-1,yi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),f.envMapRotation.value.setFromMatrix4(kp.makeRotationFromEuler(yi)),f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function s(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,A,T){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*A,f.scale.value=T*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function d(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,A){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Mt&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=A.texture,f.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,h){h.matcap&&(f.matcap.value=h.matcap)}function M(f,h){const A=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(A.matrixWorld),f.nearDistance.value=A.shadow.camera.near,f.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Vp(r,e,t,i){let a={},n={},s=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const S=T.program;i.uniformBlockBinding(A,S)}function c(A,T){let S=a[A.id];S===void 0&&(x(A),S=u(A),a[A.id]=S,A.addEventListener("dispose",f));const D=T.program;i.updateUBOMapping(A,D);const U=e.render.frame;n[A.id]!==U&&(d(A),n[A.id]=U)}function u(A){const T=p();A.__bindingPointIndex=T;const S=r.createBuffer(),D=A.__size,U=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,D,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,S),S}function p(){for(let A=0;A<o;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=a[A.id],S=A.uniforms,D=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let U=0,R=S.length;U<R;U++){const I=Array.isArray(S[U])?S[U]:[S[U]];for(let E=0,v=I.length;E<v;E++){const C=I[E];if(m(C,U,E,D)===!0){const k=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let Q=0;Q<B.length;Q++){const W=B[Q],ee=M(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,k+X,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(A,T,S,D){const U=A.value,R=T+"_"+S;if(D[R]===void 0)return typeof U=="number"||typeof U=="boolean"?D[R]=U:D[R]=U.clone(),!0;{const I=D[R];if(typeof U=="number"||typeof U=="boolean"){if(I!==U)return D[R]=U,!0}else if(I.equals(U)===!1)return I.copy(U),!0}return!1}function x(A){const T=A.uniforms;let S=0;const D=16;for(let R=0,I=T.length;R<I;R++){const E=Array.isArray(T[R])?T[R]:[T[R]];for(let v=0,C=E.length;v<C;v++){const k=E[v],B=Array.isArray(k.value)?k.value:[k.value];for(let X=0,Q=B.length;X<Q;X++){const W=B[X],ee=M(W),H=S%D,ie=H%ee.boundary,fe=H+ie;S+=ie,fe!==0&&D-fe<ee.storage&&(S+=D-fe),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=ee.storage}}}const U=S%D;return U>0&&(S+=D-U),A.__size=S,A.__cache={},this}function M(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function f(A){const T=A.target;T.removeEventListener("dispose",f);const S=s.indexOf(T.__bindingPointIndex);s.splice(S,1),r.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function h(){for(const A in a)r.deleteBuffer(a[A]);s=[],a={},n={}}return{bind:l,update:c,dispose:h}}class Wp{constructor(e={}){const{canvas:t=bl(),context:i=null,depth:a=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const x=new Uint32Array(4),M=new Int32Array(4);let f=null,h=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let D=!1;this._outputColorSpace=Ct;let U=0,R=0,I=null,E=-1,v=null;const C=new it,k=new it;let B=null;const X=new Ye(0);let Q=0,W=t.width,ee=t.height,H=1,ie=null,fe=null;const Re=new it(0,0,W,ee),Fe=new it(0,0,W,ee);let qe=!1;const j=new xo;let te=!1,xe=!1;const oe=new at,Me=new at,Ce=new O,Oe=new it,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ct(){return I===null?H:1}let b=i;function gt(_,L){return t.getContext(_,L)}try{const _={alpha:!0,depth:a,stencil:n,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ln}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",q,!1),b===null){const L="webgl2";if(b=gt(L,_),b===null)throw gt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Ve,Ke,ge,ke,Se,De,nt,y,g,N,G,Y,V,Ee,ne,_e,he,K,ce,Pe,ye,re,Ue,w;function se(){Ve=new ed(b),Ve.init(),re=new Op(b,Ve),Ke=new Yu(b,Ve,e,re),ge=new Ip(b,Ve),Ke.reverseDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),ke=new rd(b),Se=new Ep,De=new Np(b,Ve,ge,Se,Ke,re,ke),nt=new Ku(S),y=new Qu(S),g=new cc(b),Ue=new Xu(b,g),N=new td(b,g,ke,Ue),G=new nd(b,N,g,ke),ce=new ad(b,Ke,De),_e=new qu(Se),Y=new Mp(S,nt,y,Ve,Ke,Ue,_e),V=new Gp(S,Se),Ee=new yp,ne=new Cp(Ve),K=new Wu(S,nt,y,ge,G,m,l),he=new Lp(S,G,Ke),w=new Vp(b,ke,Ke,ge),Pe=new ju(b,Ve,ke),ye=new id(b,Ve,ke),ke.programs=Y.programs,S.capabilities=Ke,S.extensions=Ve,S.properties=Se,S.renderLists=Ee,S.shadowMap=he,S.state=ge,S.info=ke}se();const Z=new Hp(S,b);this.xr=Z,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const _=Ve.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Ve.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize(W,ee,!1))},this.getSize=function(_){return _.set(W,ee)},this.setSize=function(_,L,F=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=_,ee=L,t.width=Math.floor(_*H),t.height=Math.floor(L*H),F===!0&&(t.style.width=_+"px",t.style.height=L+"px"),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(W*H,ee*H).floor()},this.setDrawingBufferSize=function(_,L,F){W=_,ee=L,H=F,t.width=Math.floor(_*F),t.height=Math.floor(L*F),this.setViewport(0,0,_,L)},this.getCurrentViewport=function(_){return _.copy(C)},this.getViewport=function(_){return _.copy(Re)},this.setViewport=function(_,L,F,z){_.isVector4?Re.set(_.x,_.y,_.z,_.w):Re.set(_,L,F,z),ge.viewport(C.copy(Re).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy(Fe)},this.setScissor=function(_,L,F,z){_.isVector4?Fe.set(_.x,_.y,_.z,_.w):Fe.set(_,L,F,z),ge.scissor(k.copy(Fe).multiplyScalar(H).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(_){ge.setScissorTest(qe=_)},this.setOpaqueSort=function(_){ie=_},this.setTransparentSort=function(_){fe=_},this.getClearColor=function(_){return _.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(_=!0,L=!0,F=!0){let z=0;if(_){let P=!1;if(I!==null){const J=I.texture.format;P=J===zn||J===Fn||J===On}if(P){const J=I.texture.type,le=J===ii||J===Pi||J===_r||J===vr||J===In||J===Nn,ue=K.getClearColor(),pe=K.getClearAlpha(),we=ue.r,Ae=ue.g,be=ue.b;le?(x[0]=we,x[1]=Ae,x[2]=be,x[3]=pe,b.clearBufferuiv(b.COLOR,0,x)):(M[0]=we,M[1]=Ae,M[2]=be,M[3]=pe,b.clearBufferiv(b.COLOR,0,M))}else z|=b.COLOR_BUFFER_BIT}L&&(z|=b.DEPTH_BUFFER_BIT),F&&(z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",q,!1),K.dispose(),Ee.dispose(),ne.dispose(),Se.dispose(),nt.dispose(),y.dispose(),G.dispose(),Ue.dispose(),w.dispose(),Y.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Xn),Z.removeEventListener("sessionend",jn),gi.stop()};function me(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const _=ke.autoReset,L=he.enabled,F=he.autoUpdate,z=he.needsUpdate,P=he.type;se(),ke.autoReset=_,he.enabled=L,he.autoUpdate=F,he.needsUpdate=z,he.type=P}function q(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function de(_){const L=_.target;L.removeEventListener("dispose",de),Te(L)}function Te(_){ht(_),Se.remove(_)}function ht(_){const L=Se.get(_).programs;L!==void 0&&(L.forEach(function(F){Y.releaseProgram(F)}),_.isShaderMaterial&&Y.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,F,z,P,J){L===null&&(L=$e);const le=P.isMesh&&P.matrixWorld.determinant()<0,ue=Co(_,L,F,z,P);ge.setMaterial(z,le);let pe=F.index,we=1;if(z.wireframe===!0){if(pe=N.getWireframeAttribute(F),pe===void 0)return;we=2}const Ae=F.drawRange,be=F.attributes.position;let He=Ae.start*we,Ze=(Ae.start+Ae.count)*we;J!==null&&(He=Math.max(He,J.start*we),Ze=Math.min(Ze,(J.start+J.count)*we)),pe!==null?(He=Math.max(He,0),Ze=Math.min(Ze,pe.count)):be!=null&&(He=Math.max(He,0),Ze=Math.min(Ze,be.count));const Qe=Ze-He;if(Qe<0||Qe===1/0)return;Ue.setup(P,z,ue,F,pe);let tt,Je=Pe;if(pe!==null&&(tt=g.get(pe),Je=ye,Je.setIndex(tt)),P.isMesh)z.wireframe===!0?(ge.setLineWidth(z.wireframeLinewidth*ct()),Je.setMode(b.LINES)):Je.setMode(b.TRIANGLES);else if(P.isLine){let ve=z.linewidth;ve===void 0&&(ve=1),ge.setLineWidth(ve*ct()),P.isLineSegments?Je.setMode(b.LINES):P.isLineLoop?Je.setMode(b.LINE_LOOP):Je.setMode(b.LINE_STRIP)}else P.isPoints?Je.setMode(b.POINTS):P.isSprite&&Je.setMode(b.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Je.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const ve=P._multiDrawStarts,dt=P._multiDrawCounts,Xt=P._multiDrawCount,Lt=pe?g.get(pe).bytesPerElement:1,Oi=Se.get(z).currentProgram.getUniforms();for(let St=0;St<Xt;St++)Oi.setValue(b,"_gl_DrawID",St),Je.render(ve[St]/Lt,dt[St])}else if(P.isInstancedMesh)Je.renderInstances(He,Qe,P.count);else if(F.isInstancedBufferGeometry){const ve=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,dt=Math.min(F.instanceCount,ve);Je.renderInstances(He,Qe,dt)}else Je.render(He,Qe)};function We(_,L,F){_.transparent===!0&&_.side===$t&&_.forceSinglePass===!1?(_.side=Mt,_.needsUpdate=!0,Ar(_,L,F),_.side=fi,_.needsUpdate=!0,Ar(_,L,F),_.side=$t):Ar(_,L,F)}this.compile=function(_,L,F=null){F===null&&(F=_),h=ne.get(F),h.init(L),T.push(h),F.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(h.pushLight(P),P.castShadow&&h.pushShadow(P))}),_!==F&&_.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(h.pushLight(P),P.castShadow&&h.pushShadow(P))}),h.setupLights();const z=new Set;return _.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const J=P.material;if(J)if(Array.isArray(J))for(let le=0;le<J.length;le++){const ue=J[le];We(ue,F,P),z.add(ue)}else We(J,F,P),z.add(J)}),h=T.pop(),z},this.compileAsync=function(_,L,F=null){const z=this.compile(_,L,F);return new Promise(P=>{function J(){if(z.forEach(function(le){Se.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){P(_);return}setTimeout(J,10)}Ve.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Ut=null;function Wt(_){Ut&&Ut(_)}function Xn(){gi.stop()}function jn(){gi.start()}const gi=new Eo;gi.setAnimationLoop(Wt),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(_){Ut=_,Z.setAnimationLoop(_),_===null?gi.stop():gi.start()},Z.addEventListener("sessionstart",Xn),Z.addEventListener("sessionend",jn),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(L),L=Z.getCamera()),_.isScene===!0&&_.onBeforeRender(S,_,L,I),h=ne.get(_,T.length),h.init(L),T.push(h),Me.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),j.setFromProjectionMatrix(Me),xe=this.localClippingEnabled,te=_e.init(this.clippingPlanes,xe),f=Ee.get(_,A.length),f.init(),A.push(f),Z.enabled===!0&&Z.isPresenting===!0){const J=S.xr.getDepthSensingMesh();J!==null&&ha(J,L,-1/0,S.sortObjects)}ha(_,L,0,S.sortObjects),f.finish(),S.sortObjects===!0&&f.sort(ie,fe),Be=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Be&&K.addToRenderList(f,_),this.info.render.frame++,te===!0&&_e.beginShadows();const F=h.state.shadowsArray;he.render(F,_,L),te===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=f.opaque,P=f.transmissive;if(h.setupLights(),L.isArrayCamera){const J=L.cameras;if(P.length>0)for(let le=0,ue=J.length;le<ue;le++){const pe=J[le];qn(z,P,_,pe)}Be&&K.render(_);for(let le=0,ue=J.length;le<ue;le++){const pe=J[le];Yn(f,_,pe,pe.viewport)}}else P.length>0&&qn(z,P,_,L),Be&&K.render(_),Yn(f,_,L);I!==null&&R===0&&(De.updateMultisampleRenderTarget(I),De.updateRenderTargetMipmap(I)),_.isScene===!0&&_.onAfterRender(S,_,L),Ue.resetDefaultState(),E=-1,v=null,T.pop(),T.length>0?(h=T[T.length-1],te===!0&&_e.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?f=A[A.length-1]:f=null};function ha(_,L,F,z){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)F=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLight)h.pushLight(_),_.castShadow&&h.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||j.intersectsSprite(_)){z&&Oe.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Me);const J=G.update(_),le=_.material;le.visible&&f.push(_,J,le,F,Oe.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||j.intersectsObject(_))){const J=G.update(_),le=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Oe.copy(_.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),Oe.copy(J.boundingSphere.center)),Oe.applyMatrix4(_.matrixWorld).applyMatrix4(Me)),Array.isArray(le)){const ue=J.groups;for(let pe=0,we=ue.length;pe<we;pe++){const Ae=ue[pe],be=le[Ae.materialIndex];be&&be.visible&&f.push(_,J,be,F,Oe.z,Ae)}}else le.visible&&f.push(_,J,le,F,Oe.z,null)}}const P=_.children;for(let J=0,le=P.length;J<le;J++)ha(P[J],L,F,z)}function Yn(_,L,F,z){const P=_.opaque,J=_.transmissive,le=_.transparent;h.setupLightsView(F),te===!0&&_e.setGlobalState(S.clippingPlanes,F),z&&ge.viewport(C.copy(z)),P.length>0&&br(P,L,F),J.length>0&&br(J,L,F),le.length>0&&br(le,L,F),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function qn(_,L,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[z.id]===void 0&&(h.state.transmissionRenderTarget[z.id]=new Li(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Sr:ii,minFilter:Ri,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const P=h.state.transmissionRenderTarget[z.id],J=z.viewport||C;P.setSize(J.z*S.transmissionResolutionScale,J.w*S.transmissionResolutionScale);const le=S.getRenderTarget(),ue=S.getActiveCubeFace(),pe=S.getActiveMipmapLevel();S.setRenderTarget(P),S.getClearColor(X),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),Be&&K.render(F);const we=S.toneMapping;S.toneMapping=pi;const Ae=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),h.setupLightsView(z),te===!0&&_e.setGlobalState(S.clippingPlanes,z),br(_,F,z),De.updateMultisampleRenderTarget(P),De.updateRenderTargetMipmap(P),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let He=0,Ze=L.length;He<Ze;He++){const Qe=L[He],tt=Qe.object,Je=Qe.geometry,ve=Qe.material,dt=Qe.group;if(ve.side===$t&&tt.layers.test(z.layers)){const Xt=ve.side;ve.side=Mt,ve.needsUpdate=!0,Kn(tt,F,z,Je,ve,dt),ve.side=Xt,ve.needsUpdate=!0,be=!0}}be===!0&&(De.updateMultisampleRenderTarget(P),De.updateRenderTargetMipmap(P))}S.setRenderTarget(le,ue,pe),S.setClearColor(X,Q),Ae!==void 0&&(z.viewport=Ae),S.toneMapping=we}function br(_,L,F){const z=L.isScene===!0?L.overrideMaterial:null;for(let P=0,J=_.length;P<J;P++){const le=_[P],ue=le.object,pe=le.geometry,we=le.group;let Ae=le.material;Ae.allowOverride===!0&&z!==null&&(Ae=z),ue.layers.test(F.layers)&&Kn(ue,L,F,pe,Ae,we)}}function Kn(_,L,F,z,P,J){_.onBeforeRender(S,L,F,z,P,J),_.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),P.onBeforeRender(S,L,F,z,_,J),P.transparent===!0&&P.side===$t&&P.forceSinglePass===!1?(P.side=Mt,P.needsUpdate=!0,S.renderBufferDirect(F,L,z,P,_,J),P.side=fi,P.needsUpdate=!0,S.renderBufferDirect(F,L,z,P,_,J),P.side=$t):S.renderBufferDirect(F,L,z,P,_,J),_.onAfterRender(S,L,F,z,P,J)}function Ar(_,L,F){L.isScene!==!0&&(L=$e);const z=Se.get(_),P=h.state.lights,J=h.state.shadowsArray,le=P.state.version,ue=Y.getParameters(_,P.state,J,L,F),pe=Y.getProgramCacheKey(ue);let we=z.programs;z.environment=_.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(_.isMeshStandardMaterial?y:nt).get(_.envMap||z.environment),z.envMapRotation=z.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,we===void 0&&(_.addEventListener("dispose",de),we=new Map,z.programs=we);let Ae=we.get(pe);if(Ae!==void 0){if(z.currentProgram===Ae&&z.lightsStateVersion===le)return Jn(_,ue),Ae}else ue.uniforms=Y.getUniforms(_),_.onBeforeCompile(ue,S),Ae=Y.acquireProgram(ue,pe),we.set(pe,Ae),z.uniforms=ue.uniforms;const be=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(be.clippingPlanes=_e.uniform),Jn(_,ue),z.needsLights=Uo(_),z.lightsStateVersion=le,z.needsLights&&(be.ambientLightColor.value=P.state.ambient,be.lightProbe.value=P.state.probe,be.directionalLights.value=P.state.directional,be.directionalLightShadows.value=P.state.directionalShadow,be.spotLights.value=P.state.spot,be.spotLightShadows.value=P.state.spotShadow,be.rectAreaLights.value=P.state.rectArea,be.ltc_1.value=P.state.rectAreaLTC1,be.ltc_2.value=P.state.rectAreaLTC2,be.pointLights.value=P.state.point,be.pointLightShadows.value=P.state.pointShadow,be.hemisphereLights.value=P.state.hemi,be.directionalShadowMap.value=P.state.directionalShadowMap,be.directionalShadowMatrix.value=P.state.directionalShadowMatrix,be.spotShadowMap.value=P.state.spotShadowMap,be.spotLightMatrix.value=P.state.spotLightMatrix,be.spotLightMap.value=P.state.spotLightMap,be.pointShadowMap.value=P.state.pointShadowMap,be.pointShadowMatrix.value=P.state.pointShadowMatrix),z.currentProgram=Ae,z.uniformsList=null,Ae}function Zn(_){if(_.uniformsList===null){const L=_.currentProgram.getUniforms();_.uniformsList=ia.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function Jn(_,L){const F=Se.get(_);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function Co(_,L,F,z,P){L.isScene!==!0&&(L=$e),De.resetTextureUnits();const J=L.fog,le=z.isMeshStandardMaterial?L.environment:null,ue=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:sr,pe=(z.isMeshStandardMaterial?y:nt).get(z.envMap||le),we=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ae=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),be=!!F.morphAttributes.position,He=!!F.morphAttributes.normal,Ze=!!F.morphAttributes.color;let Qe=pi;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Qe=S.toneMapping);const tt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Je=tt!==void 0?tt.length:0,ve=Se.get(z),dt=h.state.lights;if(te===!0&&(xe===!0||_!==v)){const pt=_===v&&z.id===E;_e.setState(z,_,pt)}let Xt=!1;z.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==dt.state.version||ve.outputColorSpace!==ue||P.isBatchedMesh&&ve.batching===!1||!P.isBatchedMesh&&ve.batching===!0||P.isBatchedMesh&&ve.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&ve.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&ve.instancing===!1||!P.isInstancedMesh&&ve.instancing===!0||P.isSkinnedMesh&&ve.skinning===!1||!P.isSkinnedMesh&&ve.skinning===!0||P.isInstancedMesh&&ve.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&ve.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&ve.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&ve.instancingMorph===!1&&P.morphTexture!==null||ve.envMap!==pe||z.fog===!0&&ve.fog!==J||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==_e.numPlanes||ve.numIntersection!==_e.numIntersection)||ve.vertexAlphas!==we||ve.vertexTangents!==Ae||ve.morphTargets!==be||ve.morphNormals!==He||ve.morphColors!==Ze||ve.toneMapping!==Qe||ve.morphTargetsCount!==Je)&&(Xt=!0):(Xt=!0,ve.__version=z.version);let Lt=ve.currentProgram;Xt===!0&&(Lt=Ar(z,L,P));let Oi=!1,St=!1,hr=!1;const et=Lt.getUniforms(),At=ve.uniforms;if(ge.useProgram(Lt.program)&&(Oi=!0,St=!0,hr=!0),z.id!==E&&(E=z.id,St=!0),Oi||v!==_){ge.buffers.depth.getReversed()?(oe.copy(_.projectionMatrix),wl(oe),Rl(oe),et.setValue(b,"projectionMatrix",oe)):et.setValue(b,"projectionMatrix",_.projectionMatrix),et.setValue(b,"viewMatrix",_.matrixWorldInverse);const pt=et.map.cameraPosition;pt!==void 0&&pt.setValue(b,Ce.setFromMatrixPosition(_.matrixWorld)),Ke.logarithmicDepthBuffer&&et.setValue(b,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&et.setValue(b,"isOrthographic",_.isOrthographicCamera===!0),v!==_&&(v=_,St=!0,hr=!0)}if(P.isSkinnedMesh){et.setOptional(b,P,"bindMatrix"),et.setOptional(b,P,"bindMatrixInverse");const pt=P.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),et.setValue(b,"boneTexture",pt.boneTexture,De))}P.isBatchedMesh&&(et.setOptional(b,P,"batchingTexture"),et.setValue(b,"batchingTexture",P._matricesTexture,De),et.setOptional(b,P,"batchingIdTexture"),et.setValue(b,"batchingIdTexture",P._indirectTexture,De),et.setOptional(b,P,"batchingColorTexture"),P._colorsTexture!==null&&et.setValue(b,"batchingColorTexture",P._colorsTexture,De));const wt=F.morphAttributes;if((wt.position!==void 0||wt.normal!==void 0||wt.color!==void 0)&&ce.update(P,F,Lt),(St||ve.receiveShadow!==P.receiveShadow)&&(ve.receiveShadow=P.receiveShadow,et.setValue(b,"receiveShadow",P.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(At.envMap.value=pe,At.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(At.envMapIntensity.value=L.environmentIntensity),St&&(et.setValue(b,"toneMappingExposure",S.toneMappingExposure),ve.needsLights&&Po(At,hr),J&&z.fog===!0&&V.refreshFogUniforms(At,J),V.refreshMaterialUniforms(At,z,H,ee,h.state.transmissionRenderTarget[_.id]),ia.upload(b,Zn(ve),At,De)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ia.upload(b,Zn(ve),At,De),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&et.setValue(b,"center",P.center),et.setValue(b,"modelViewMatrix",P.modelViewMatrix),et.setValue(b,"normalMatrix",P.normalMatrix),et.setValue(b,"modelMatrix",P.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const pt=z.uniformsGroups;for(let Dt=0,ua=pt.length;Dt<ua;Dt++){const _i=pt[Dt];w.update(_i,Lt),w.bind(_i,Lt)}}return Lt}function Po(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function Uo(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(_,L,F){const z=Se.get(_);z.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Se.get(_.texture).__webglTexture=L,Se.get(_.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:F,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,L){const F=Se.get(_);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0};const Lo=b.createFramebuffer();this.setRenderTarget=function(_,L=0,F=0){I=_,U=L,R=F;let z=!0,P=null,J=!1,le=!1;if(_){const ue=Se.get(_);if(ue.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(b.FRAMEBUFFER,null),z=!1;else if(ue.__webglFramebuffer===void 0)De.setupRenderTarget(_);else if(ue.__hasExternalTextures)De.rebindTextures(_,Se.get(_.texture).__webglTexture,Se.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Ae=_.depthTexture;if(ue.__boundDepthTexture!==Ae){if(Ae!==null&&Se.has(Ae)&&(_.width!==Ae.image.width||_.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(_)}}const pe=_.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(le=!0);const we=Se.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(we[L])?P=we[L][F]:P=we[L],J=!0):_.samples>0&&De.useMultisampledRTT(_)===!1?P=Se.get(_).__webglMultisampledFramebuffer:Array.isArray(we)?P=we[F]:P=we,C.copy(_.viewport),k.copy(_.scissor),B=_.scissorTest}else C.copy(Re).multiplyScalar(H).floor(),k.copy(Fe).multiplyScalar(H).floor(),B=qe;if(F!==0&&(P=Lo),ge.bindFramebuffer(b.FRAMEBUFFER,P)&&z&&ge.drawBuffers(_,P),ge.viewport(C),ge.scissor(k),ge.setScissorTest(B),J){const ue=Se.get(_.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+L,ue.__webglTexture,F)}else if(le){const ue=Se.get(_.texture),pe=L;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,ue.__webglTexture,F,pe)}else if(_!==null&&F!==0){const ue=Se.get(_.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ue.__webglTexture,F)}E=-1},this.readRenderTargetPixels=function(_,L,F,z,P,J,le,ue=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Se.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){ge.bindFramebuffer(b.FRAMEBUFFER,pe);try{const we=_.textures[ue],Ae=we.format,be=we.type;if(!Ke.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-z&&F>=0&&F<=_.height-P&&(_.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+ue),b.readPixels(L,F,z,P,re.convert(Ae),re.convert(be),J))}finally{const we=I!==null?Se.get(I).__webglFramebuffer:null;ge.bindFramebuffer(b.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(_,L,F,z,P,J,le,ue=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Se.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe)if(L>=0&&L<=_.width-z&&F>=0&&F<=_.height-P){ge.bindFramebuffer(b.FRAMEBUFFER,pe);const we=_.textures[ue],Ae=we.format,be=we.type;if(!Ke.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,He),b.bufferData(b.PIXEL_PACK_BUFFER,J.byteLength,b.STREAM_READ),_.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+ue),b.readPixels(L,F,z,P,re.convert(Ae),re.convert(be),0);const Ze=I!==null?Se.get(I).__webglFramebuffer:null;ge.bindFramebuffer(b.FRAMEBUFFER,Ze);const Qe=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Al(b,Qe,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,He),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,J),b.deleteBuffer(He),b.deleteSync(Qe),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,L=null,F=0){const z=Math.pow(2,-F),P=Math.floor(_.image.width*z),J=Math.floor(_.image.height*z),le=L!==null?L.x:0,ue=L!==null?L.y:0;De.setTexture2D(_,0),b.copyTexSubImage2D(b.TEXTURE_2D,F,0,0,le,ue,P,J),ge.unbindTexture()};const Do=b.createFramebuffer(),Io=b.createFramebuffer();this.copyTextureToTexture=function(_,L,F=null,z=null,P=0,J=null){J===null&&(P!==0?(tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=P,P=0):J=0);let le,ue,pe,we,Ae,be,He,Ze,Qe;const tt=_.isCompressedTexture?_.mipmaps[J]:_.image;if(F!==null)le=F.max.x-F.min.x,ue=F.max.y-F.min.y,pe=F.isBox3?F.max.z-F.min.z:1,we=F.min.x,Ae=F.min.y,be=F.isBox3?F.min.z:0;else{const wt=Math.pow(2,-P);le=Math.floor(tt.width*wt),ue=Math.floor(tt.height*wt),_.isDataArrayTexture?pe=tt.depth:_.isData3DTexture?pe=Math.floor(tt.depth*wt):pe=1,we=0,Ae=0,be=0}z!==null?(He=z.x,Ze=z.y,Qe=z.z):(He=0,Ze=0,Qe=0);const Je=re.convert(L.format),ve=re.convert(L.type);let dt;L.isData3DTexture?(De.setTexture3D(L,0),dt=b.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(De.setTexture2DArray(L,0),dt=b.TEXTURE_2D_ARRAY):(De.setTexture2D(L,0),dt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,L.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,L.unpackAlignment);const Xt=b.getParameter(b.UNPACK_ROW_LENGTH),Lt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Oi=b.getParameter(b.UNPACK_SKIP_PIXELS),St=b.getParameter(b.UNPACK_SKIP_ROWS),hr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,tt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,tt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,we),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ae),b.pixelStorei(b.UNPACK_SKIP_IMAGES,be);const et=_.isDataArrayTexture||_.isData3DTexture,At=L.isDataArrayTexture||L.isData3DTexture;if(_.isDepthTexture){const wt=Se.get(_),pt=Se.get(L),Dt=Se.get(wt.__renderTarget),ua=Se.get(pt.__renderTarget);ge.bindFramebuffer(b.READ_FRAMEBUFFER,Dt.__webglFramebuffer),ge.bindFramebuffer(b.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let _i=0;_i<pe;_i++)et&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Se.get(_).__webglTexture,P,be+_i),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Se.get(L).__webglTexture,J,Qe+_i)),b.blitFramebuffer(we,Ae,le,ue,He,Ze,le,ue,b.DEPTH_BUFFER_BIT,b.NEAREST);ge.bindFramebuffer(b.READ_FRAMEBUFFER,null),ge.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(P!==0||_.isRenderTargetTexture||Se.has(_)){const wt=Se.get(_),pt=Se.get(L);ge.bindFramebuffer(b.READ_FRAMEBUFFER,Do),ge.bindFramebuffer(b.DRAW_FRAMEBUFFER,Io);for(let Dt=0;Dt<pe;Dt++)et?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,wt.__webglTexture,P,be+Dt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,wt.__webglTexture,P),At?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,pt.__webglTexture,J,Qe+Dt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,pt.__webglTexture,J),P!==0?b.blitFramebuffer(we,Ae,le,ue,He,Ze,le,ue,b.COLOR_BUFFER_BIT,b.NEAREST):At?b.copyTexSubImage3D(dt,J,He,Ze,Qe+Dt,we,Ae,le,ue):b.copyTexSubImage2D(dt,J,He,Ze,we,Ae,le,ue);ge.bindFramebuffer(b.READ_FRAMEBUFFER,null),ge.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else At?_.isDataTexture||_.isData3DTexture?b.texSubImage3D(dt,J,He,Ze,Qe,le,ue,pe,Je,ve,tt.data):L.isCompressedArrayTexture?b.compressedTexSubImage3D(dt,J,He,Ze,Qe,le,ue,pe,Je,tt.data):b.texSubImage3D(dt,J,He,Ze,Qe,le,ue,pe,Je,ve,tt):_.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,J,He,Ze,le,ue,Je,ve,tt.data):_.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,J,He,Ze,tt.width,tt.height,Je,tt.data):b.texSubImage2D(b.TEXTURE_2D,J,He,Ze,le,ue,Je,ve,tt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Xt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Lt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Oi),b.pixelStorei(b.UNPACK_SKIP_ROWS,St),b.pixelStorei(b.UNPACK_SKIP_IMAGES,hr),J===0&&L.generateMipmaps&&b.generateMipmap(dt),ge.unbindTexture()},this.copyTextureToTexture3D=function(_,L,F=null,z=null,P=0){return tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,L,F,z,P)},this.initRenderTarget=function(_){Se.get(_).__webglFramebuffer===void 0&&De.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?De.setTextureCube(_,0):_.isData3DTexture?De.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?De.setTexture2DArray(_,0):De.setTexture2D(_,0),ge.unbindTexture()},this.resetState=function(){U=0,R=0,I=null,ge.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const qs={type:"change"},Vn={type:"start"},Ao={type:"end"},Kr=new ho,Ks=new hi,Xp=Math.cos(70*Tl.DEG2RAD),st=new O,xt=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ga=1e-6;class jp extends oc{constructor(e,t=null){super(e,t),this.state=je.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Ui,this._lastTargetPosition=new O,this._quat=new Ui().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ss,this._sphericalDelta=new Ss,this._scale=1,this._panOffset=new O,this._rotateStart=new Ne,this._rotateEnd=new Ne,this._rotateDelta=new Ne,this._panStart=new Ne,this._panEnd=new Ne,this._panDelta=new Ne,this._dollyStart=new Ne,this._dollyEnd=new Ne,this._dollyDelta=new Ne,this._dollyDirection=new O,this._mouse=new Ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qp.bind(this),this._onPointerDown=Yp.bind(this),this._onPointerUp=Kp.bind(this),this._onContextMenu=rf.bind(this),this._onMouseWheel=$p.bind(this),this._onKeyDown=Qp.bind(this),this._onTouchStart=ef.bind(this),this._onTouchMove=tf.bind(this),this._onMouseDown=Zp.bind(this),this._onMouseMove=Jp.bind(this),this._interceptControlDown=af.bind(this),this._interceptControlUp=nf.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qs),this.update(),this.state=je.NONE}update(e=null){const t=this.object.position;st.copy(t).sub(this.target),st.applyQuaternion(this._quat),this._spherical.setFromVector3(st),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=xt:i>Math.PI&&(i-=xt),a<-Math.PI?a+=xt:a>Math.PI&&(a-=xt),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=s!=this._spherical.radius}if(st.setFromSpherical(this._spherical),st.applyQuaternion(this._quatInverse),t.copy(this.target).add(st),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=st.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),n=!!l}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=st.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Kr.origin.copy(this.object.position),Kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kr.direction))<Xp?this.object.lookAt(this.target):(Ks.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kr.intersectPlane(Ks,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,n||this._lastPosition.distanceToSquared(this.object.position)>Ga||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ga||this._lastTargetPosition.distanceToSquared(this.target)>Ga?(this.dispatchEvent(qs),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xt/60*this.autoRotateSpeed*e:xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){st.setFromMatrixColumn(t,0),st.multiplyScalar(-e),this._panOffset.add(st)}_panUp(e,t){this.screenSpacePanning===!0?st.setFromMatrixColumn(t,1):(st.setFromMatrixColumn(t,0),st.crossVectors(this.object.up,st)),st.multiplyScalar(e),this._panOffset.add(st)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;st.copy(a).sub(this.target);let n=st.length();n*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*n/i.clientHeight,this.object.matrix),this._panUp(2*t*n/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,n=t-i.top,s=i.width,o=i.height;this._mouse.x=a/s*2-1,this._mouse.y=-(n/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,n=Math.sqrt(i*i+a*a);this._dollyStart.set(0,n)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._rotateEnd.set(a,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,n=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,n),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Yp(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function qp(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Kp(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ao),this.state=je.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Zp(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=je.DOLLY;break;case Qi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}break;case Qi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Vn)}function Jp(r){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function $p(r){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(r.preventDefault(),this.dispatchEvent(Vn),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ao))}function Qp(r){this.enabled!==!1&&this._handleKeyDown(r)}function ef(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=je.TOUCH_ROTATE;break;case Ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case Ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=je.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Vn)}function tf(r){switch(this._trackPointer(r),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=je.NONE}}function rf(r){this.enabled!==!1&&r.preventDefault()}function af(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nf(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wo=new Ql,Er=new Pt(75,window.innerWidth/window.innerHeight,.1,1e3);Er.position.z=5;const Di=new Wp({antialias:!0});Di.setSize(window.innerWidth,window.innerHeight);Di.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(Di.domElement);const sf=new lr(1,1,1),of=new kn({color:65280,wireframe:!1}),Un=new Gt(sf,of);wo.add(Un);const Wn=new jp(Er,Di.domElement);Wn.enableDamping=!0;Wn.dampingFactor=.05;window.addEventListener("resize",()=>{Er.aspect=window.innerWidth/window.innerHeight,Er.updateProjectionMatrix(),Di.setSize(window.innerWidth,window.innerHeight),Di.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Ro=()=>{requestAnimationFrame(Ro),Un.rotation.x+=.01,Un.rotation.y+=.01,Wn.update(),Di.render(wo,Er)};Ro();
